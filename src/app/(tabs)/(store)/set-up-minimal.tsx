import {
  MinimalCard,
  MinimalCheckbox,
  MinimalHeader,
  MinimalInfoBox,
} from '@/components/minimalist';
import { Button, Text } from '@/components/ui';
import { Feedback } from '@/lib/haptics';
import React, { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const SetUpStoreMinimal: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDays, setSelectedDays] = useState<string[]>(['Monday']);

  const STEPS = ['Basic Info', 'Location', 'Contact', 'Schedule', 'Review'];
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleNext = () => {
    Feedback.light();
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    Feedback.light();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <SafeAreaView className="safe-area bg-background" edges={['top']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom + (Platform.OS === 'ios' ? 50 : 90),
          paddingTop: Platform.OS === 'android' ? insets.top : 0,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 py-8 gap-6">
          {/* Header */}
          <MinimalHeader
            title="Brand Setup"
            subtitle="Complete your profile to get started"
            badge={`${currentStep + 1}/${STEPS.length}`}
          />

          {/* Progress Bar */}
          <View className="minimal-progress">
            <View className="flex-row justify-between mb-2">
              <Text className="minimal-caption text-gray-500">
                {STEPS[currentStep]}
              </Text>
              <Text className="minimal-caption text-gray-500">
                {Math.round(((currentStep + 1) / STEPS.length) * 100)}%
              </Text>
            </View>
            <View className="minimal-progress-bar">
              <View
                className="minimal-progress-fill"
                style={{
                  width: `${((currentStep + 1) / STEPS.length) * 100}%`,
                }}
              />
            </View>
          </View>

          {/* Step Indicators */}
          <View className="flex-row justify-between">
            {STEPS.map((step, index) => (
              <View key={index} className="items-center flex-1">
                <View
                  className={cn(
                    'w-10 h-10 rounded-full items-center justify-center mb-2',
                    index <= currentStep
                      ? 'bg-primary'
                      : 'bg-gray-100 border border-gray-200',
                  )}
                >
                  <Text
                    className={cn(
                      'text-sm font-semibold',
                      index <= currentStep ? 'text-white' : 'text-gray-400',
                    )}
                  >
                    {index < currentStep ? '✓' : index + 1}
                  </Text>
                </View>
                <Text className="minimal-caption text-gray-500 text-center">
                  {step}
                </Text>
              </View>
            ))}
          </View>

          {/* Content */}
          <View className="gap-5">
            {currentStep === 0 && (
              <>
                <MinimalCard>
                  <Text className="minimal-label text-gray-700 mb-2">
                    Brand Name
                  </Text>
                  <View className="minimal-input">
                    <Text className="minimal-body text-gray-400">
                      Enter your brand name
                    </Text>
                  </View>
                  <MinimalInfoBox variant="info" className="mt-3">
                    💡 Choose a memorable name that represents your business
                  </MinimalInfoBox>
                </MinimalCard>

                <MinimalCard>
                  <Text className="minimal-label text-gray-700 mb-2">
                    Description
                  </Text>
                  <View className="minimal-input" style={{ height: 80 }}>
                    <Text className="minimal-body text-gray-400">
                      Tell us about your brand
                    </Text>
                  </View>
                </MinimalCard>
              </>
            )}

            {currentStep === 1 && (
              <>
                <MinimalCard>
                  <Text className="minimal-label text-gray-700 mb-2">
                    Country
                  </Text>
                  <View className="minimal-input">
                    <Text className="minimal-body text-gray-400">
                      Select country
                    </Text>
                  </View>
                </MinimalCard>

                <MinimalCard>
                  <View className="flex-row gap-3">
                    <View className="flex-1">
                      <Text className="minimal-label text-gray-700 mb-2">
                        City
                      </Text>
                      <View className="minimal-input">
                        <Text className="minimal-body text-gray-400">City</Text>
                      </View>
                    </View>
                    <View className="flex-1">
                      <Text className="minimal-label text-gray-700 mb-2">
                        State
                      </Text>
                      <View className="minimal-input">
                        <Text className="minimal-body text-gray-400">
                          State
                        </Text>
                      </View>
                    </View>
                  </View>
                </MinimalCard>
              </>
            )}

            {currentStep === 2 && (
              <>
                <MinimalCard>
                  <Text className="minimal-label text-gray-700 mb-2">
                    Email Address
                  </Text>
                  <View className="minimal-input">
                    <Text className="minimal-body text-gray-400">
                      your@email.com
                    </Text>
                  </View>
                  <MinimalInfoBox variant="info" className="mt-3">
                    📧 We&apos;ll use this to verify your brand
                  </MinimalInfoBox>
                </MinimalCard>

                <MinimalCard>
                  <Text className="minimal-label text-gray-700 mb-2">
                    Phone Number
                  </Text>
                  <View className="minimal-input">
                    <Text className="minimal-body text-gray-400">
                      +1 (555) 000-0000
                    </Text>
                  </View>
                </MinimalCard>
              </>
            )}

            {currentStep === 3 && (
              <MinimalCard>
                <Text className="minimal-subheading mb-4">
                  Select Working Days
                </Text>
                <View className="gap-3">
                  {DAYS.map((day) => (
                    <MinimalCheckbox
                      key={day}
                      checked={selectedDays.includes(day)}
                      onPress={() => toggleDay(day)}
                      label={day}
                    />
                  ))}
                </View>
                <MinimalInfoBox variant="warning" className="mt-4">
                  ⏰ Default hours: 9:00 AM - 6:00 PM
                </MinimalInfoBox>
              </MinimalCard>
            )}

            {currentStep === 4 && (
              <>
                <MinimalCard>
                  <Text className="minimal-subheading mb-3">
                    Review Your Information
                  </Text>
                  <View className="gap-3">
                    <View>
                      <Text className="minimal-caption text-gray-500">
                        BRAND NAME
                      </Text>
                      <Text className="minimal-body text-gray-900 mt-1">
                        My Awesome Brand
                      </Text>
                    </View>
                    <View className="h-px bg-gray-100" />
                    <View>
                      <Text className="minimal-caption text-gray-500">
                        LOCATION
                      </Text>
                      <Text className="minimal-body text-gray-900 mt-1">
                        New York, United States
                      </Text>
                    </View>
                    <View className="h-px bg-gray-100" />
                    <View>
                      <Text className="minimal-caption text-gray-500">
                        CONTACT
                      </Text>
                      <Text className="minimal-body text-gray-900 mt-1">
                        email@example.com
                      </Text>
                    </View>
                    <View className="h-px bg-gray-100" />
                    <View>
                      <Text className="minimal-caption text-gray-500">
                        SCHEDULE
                      </Text>
                      <Text className="minimal-body text-gray-900 mt-1">
                        {selectedDays.join(', ')}
                      </Text>
                    </View>
                  </View>
                </MinimalCard>

                <MinimalInfoBox variant="success">
                  ✅ Everything looks good! Ready to submit.
                </MinimalInfoBox>
              </>
            )}
          </View>

          {/* Navigation */}
          <View className="flex-row gap-3 mt-4">
            {currentStep > 0 && (
              <Button
                onPress={handleBack}
                className="flex-1 minimal-button bg-gray-100"
              >
                <Text className="minimal-button-text text-gray-700">Back</Text>
              </Button>
            )}
            {currentStep < STEPS.length - 1 ? (
              <Button
                onPress={handleNext}
                className="flex-1 minimal-button bg-primary"
              >
                <Text className="minimal-button-text text-primary-foreground">
                  Continue
                </Text>
              </Button>
            ) : (
              <Button
                onPress={() => Feedback.success()}
                className="flex-1 minimal-button bg-primary"
              >
                <Text className="minimal-button-text text-primary-foreground">
                  Submit
                </Text>
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default SetUpStoreMinimal;
