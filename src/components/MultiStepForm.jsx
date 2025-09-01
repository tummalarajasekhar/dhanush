import React, { useState,useEffect } from 'react';

const MultiStepForm = () => {
   
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const steps = [
    {
      id: 'projectType',
      question: 'What type of project do you need?',
      options: ['Website', 'Web Application', 'Mobile App', 'Other'],
      type: 'button'
    },
    {
      id: 'websiteType',
      question: 'What type of website?',
      options: ['E-commerce', 'Portfolio/Blog', 'Business Landing Page', 'Other'],
      type: 'button',
      dependsOn: { projectType: 'Website' }
    },
    {
      id: 'webAppFunction',
      question: 'What is the main function?',
      options: [
        'Dashboard / Analytics',
        'Customer Relationship Management (CRM)',
        'Project Management Tool',
        'Social Platform'
      ],
      type: 'button',
      dependsOn: { projectType: 'Web Application' }
    },
    {
      id: 'features',
      question: 'What key features do you need?',
      options: ['Shopping Cart', 'User Accounts', 'Payment Processing', 'Product Reviews'],
      type: 'checkbox',
      dependsOn: { websiteType: 'E-commerce' }
    },
    {
      id: 'additionalNotes',
      question: 'Any additional notes or requirements?',
      type: 'text',
      dependsOn: {} // This step will show after all dependent steps
    },
    {
      id: 'review',
      question: 'Review and Submit',
      type: 'review'
    }
  ];

  const getCurrentStepConfig = () => {
    return steps[currentStep];
  };

  const handleAnswer = (answer) => {
    const currentStepConfig = getCurrentStepConfig();
    
    if (currentStepConfig.type === 'checkbox') {
      const updatedFeatures = selectedFeatures.includes(answer)
        ? selectedFeatures.filter(f => f !== answer)
        : [...selectedFeatures, answer];
      
      setSelectedFeatures(updatedFeatures);
      return;
    }

    setAnswers({
      ...answers,
      [currentStepConfig.id]: answer
    });

    if (currentStepConfig.type !== 'checkbox') {
      goToNextStep();
    }
  };

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleSubmit = () => {
    const submissionData = {
      projectType: answers.projectType,
      websiteType: answers.websiteType,
      webAppFunction: answers.webAppFunction,
      features: selectedFeatures,
      additionalNotes: answers.additionalNotes
    };
    
    console.log('Submission Data:', JSON.stringify(submissionData, null, 2));
    alert('Requirements submitted! Check console for JSON output.');
  };

  const isStepRelevant = (stepIndex) => {
    const step = steps[stepIndex];
    
    if (!step.dependsOn || Object.keys(step.dependsOn).length === 0) {
      return true;
    }
    
    return Object.entries(step.dependsOn).every(([key, value]) => 
      answers[key] === value
    );
  };

  const renderStep = () => {
    const step = getCurrentStepConfig();
    
    switch (step.type) {
      case 'button':
        return (
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4 max-w-xs">
              <p className="text-white">{step.question}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {step.options.map((option, index) => (
                <button
                  key={index}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4 max-w-xs">
              <p className="text-white">{step.question}</p>
            </div>
            <div className="space-y-2 mt-4">
              {step.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(option)}
                    onChange={() => handleAnswer(option)}
                    className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                onClick={goToNextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4 max-w-xs">
              <p className="text-white">{step.question}</p>
            </div>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={answers.additionalNotes || ''}
              onChange={(e) => setAnswers({
                ...answers,
                additionalNotes: e.target.value
              })}
              rows={4}
              placeholder="Enter any additional requirements or notes here..."
            />
            <div className="flex justify-end mt-4">
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                onClick={goToNextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      
      case 'review':
        return (
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-4 max-w-xs">
              <p className="text-white">{step.question}</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Project Type:</span>
                <span className="text-white">{answers.projectType}</span>
              </div>
              
              {answers.websiteType && (
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Website Type:</span>
                  <span className="text-white">{answers.websiteType}</span>
                </div>
              )}
              
              {answers.webAppFunction && (
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Web App Function:</span>
                  <span className="text-white">{answers.webAppFunction}</span>
                </div>
              )}
              
              {selectedFeatures.length > 0 && (
                <div className="border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Features:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {selectedFeatures.map((feature, index) => (
                      <span key={index} className="bg-indigo-900 text-indigo-200 px-2 py-1 rounded-md text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {answers.additionalNotes && (
                <div>
                  <span className="text-gray-400">Additional Notes:</span>
                  <p className="text-white mt-1 bg-gray-900 p-3 rounded-lg">
                    {answers.additionalNotes}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={handleSubmit}
              >
                Submit Requirements
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="h-auto  bg-transparent overflow-hidden flex   justify-center p-1">
      <div className="w-full  bg-gray-800 rounded-xl shadow-2xl overflow-hidden  ">
        <div className=" p-6 bg-gray-900">
          <h2 className="text-xl font-bold text-white">Project Requirements</h2>
          <p className="text-gray-400 text-sm">We'll help you define your project needs</p>
        </div>
        
        <div className="p-6 bg-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {steps.map((step, index) => (
                isStepRelevant(index) && (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`h-2 w-2 rounded-full ${
                      index === currentStep 
                        ? 'bg-indigo-500' 
                        : index < currentStep 
                          ? 'bg-green-500' 
                          : 'bg-gray-600'
                    }`}
                    title={step.question}
                  />
                )
              ))}
            </div>
            <span className="text-sm text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          
          <div className="min-h-[300px]">
            {renderStep()}
          </div>
        </div>
        
        {currentStep > 0 && currentStep !== steps.length - 1 && (
          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <button 
              className="text-gray-400 hover:text-white flex items-center"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;