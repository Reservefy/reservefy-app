import { Button, Input, Label, Text } from '@/components/ui';
import React, { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type SetupStep = 'basic' | 'location' | 'contact' | 'hours' | 'review';

interface BrandFormData {
  // Basic Info
  brandName: string;
  description: string;
  workingFields: string[];

  // Location
  country: string;
  state: string;
  city: string;
  street: string;
  detailedAddress: string;
  postalCode: string;

  // Contact
  email: string;
  phone: string;

  // Working Hours
  workingDays: string[];
}

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const SetUpStore: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState<SetupStep>('basic');
  const [formData, setFormData] = useState<BrandFormData>({
    brandName: '',
    description: '',
    workingFields: [],
    country: '',
    state: '',
    city: '',
    street: '',
    detailedAddress: '',
    postalCode: '',
    email: '',
    phone: '',
    workingDays: [],
  });

  const updateFormData = (
    field: keyof BrandFormData,
    value: string | string[],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleWorkingDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter((d) => d !== day)
        : [...prev.workingDays, day],
    }));
  };

  const handleNext = () => {
    const steps: SetupStep[] = [
      'basic',
      'location',
      'contact',
      'hours',
      'review',
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: SetupStep[] = [
      'basic',
      'location',
      'contact',
      'hours',
      'review',
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleSubmit = () => {
    // TODO: Submit to backend
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
  };

  const renderStepIndicator = () => {
    const steps: SetupStep[] = [
      'basic',
      'location',
      'contact',
      'hours',
      'review',
    ];
    const currentIndex = steps.indexOf(currentStep);

    return (
      <View className="flex-row justify-between mb-6">
        {steps.map((step, index) => (
          <View key={step} className="flex-1 items-center">
            <View
              className={`w-8 h-8 rounded-full items-center justify-center border-2 ${
                index <= currentIndex
                  ? 'bg-primary border-primary'
                  : 'bg-background border-border'
              }`}
            >
              <Text
                className={`text-caption font-bold ${
                  index <= currentIndex
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {index + 1}
              </Text>
            </View>
            {index < steps.length - 1 && (
              <View
                className={`absolute top-4 left-1/2 w-full h-0.5 ${
                  index < currentIndex ? 'bg-primary' : 'bg-border'
                }`}
                style={{ zIndex: -1 }}
              />
            )}
          </View>
        ))}
      </View>
    );
  };

  const renderBasicInfo = () => (
    <View className="gap-4">
      <Text className="text-heading font-bold text-foreground mb-2">
        Basic Information
      </Text>

      <View className="gap-2">
        <Label nativeID="brandName">Brand Name *</Label>
        <Input
          placeholder="Enter your brand name"
          value={formData.brandName}
          onChangeText={(text) => updateFormData('brandName', text)}
          nativeID="brandName"
        />
      </View>

      <View className="gap-2">
        <Label nativeID="description">Description</Label>
        <Input
          placeholder="Describe your brand"
          value={formData.description}
          onChangeText={(text) => updateFormData('description', text)}
          multiline
          numberOfLines={4}
          nativeID="description"
          className="h-24 py-2"
        />
      </View>

      <View className="gap-2">
        <Label nativeID="workingFields">Working Fields (comma-separated)</Label>
        <Input
          placeholder="e.g., Hair Salon, Barbershop, Spa"
          value={formData.workingFields.join(', ')}
          onChangeText={(text) =>
            updateFormData(
              'workingFields',
              text.split(',').map((f) => f.trim()),
            )
          }
          nativeID="workingFields"
        />
        <Text className="text-caption text-muted-foreground">
          Minimum 3, maximum 5 keywords
        </Text>
      </View>
    </View>
  );

  const renderLocation = () => (
    <View className="gap-4">
      <Text className="text-heading font-bold text-foreground mb-2">
        Location Details
      </Text>

      <View className="gap-2">
        <Label nativeID="country">Country *</Label>
        <Input
          placeholder="Enter country"
          value={formData.country}
          onChangeText={(text) => updateFormData('country', text)}
          nativeID="country"
        />
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 gap-2">
          <Label nativeID="state">State</Label>
          <Input
            placeholder="State"
            value={formData.state}
            onChangeText={(text) => updateFormData('state', text)}
            nativeID="state"
          />
        </View>
        <View className="flex-1 gap-2">
          <Label nativeID="city">City</Label>
          <Input
            placeholder="City"
            value={formData.city}
            onChangeText={(text) => updateFormData('city', text)}
            nativeID="city"
          />
        </View>
      </View>

      <View className="gap-2">
        <Label nativeID="street">Street *</Label>
        <Input
          placeholder="Street address"
          value={formData.street}
          onChangeText={(text) => updateFormData('street', text)}
          nativeID="street"
        />
      </View>

      <View className="gap-2">
        <Label nativeID="detailedAddress">Detailed Address</Label>
        <Input
          placeholder="Apartment, suite, etc."
          value={formData.detailedAddress}
          onChangeText={(text) => updateFormData('detailedAddress', text)}
          nativeID="detailedAddress"
        />
      </View>

      <View className="gap-2">
        <Label nativeID="postalCode">Postal Code</Label>
        <Input
          placeholder="Postal code"
          value={formData.postalCode}
          onChangeText={(text) => updateFormData('postalCode', text)}
          nativeID="postalCode"
        />
      </View>
    </View>
  );

  const renderContact = () => (
    <View className="gap-4">
      <Text className="text-heading font-bold text-foreground mb-2">
        Contact Information
      </Text>

      <View className="gap-2">
        <Label nativeID="email">Email *</Label>
        <Input
          placeholder="your@email.com"
          value={formData.email}
          onChangeText={(text) => updateFormData('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
          nativeID="email"
        />
      </View>

      <View className="gap-2">
        <Label nativeID="phone">Phone Number</Label>
        <Input
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChangeText={(text) => updateFormData('phone', text)}
          keyboardType="phone-pad"
          nativeID="phone"
        />
      </View>
    </View>
  );

  const renderWorkingHours = () => (
    <View className="gap-4">
      <Text className="text-heading font-bold text-foreground mb-2">
        Working Days
      </Text>
      <Text className="text-body text-muted-foreground mb-2">
        Select the days your brand operates
      </Text>

      <View className="gap-3">
        {DAYS_OF_WEEK.map((day) => (
          <Button
            key={day}
            variant={formData.workingDays.includes(day) ? 'default' : 'outline'}
            onPress={() => toggleWorkingDay(day)}
            className="w-full"
          >
            <Text>{day}</Text>
          </Button>
        ))}
      </View>
    </View>
  );

  const renderReview = () => (
    <View className="gap-4">
      <Text className="text-heading font-bold text-foreground mb-2">
        Review Your Information
      </Text>

      <View className="bg-card p-4 rounded-lg border border-border gap-3">
        <View>
          <Text className="text-caption text-muted-foreground">Brand Name</Text>
          <Text className="text-body font-bold">
            {formData.brandName || 'N/A'}
          </Text>
        </View>

        <View>
          <Text className="text-caption text-muted-foreground">
            Description
          </Text>
          <Text className="text-body">{formData.description || 'N/A'}</Text>
        </View>

        <View>
          <Text className="text-caption text-muted-foreground">
            Working Fields
          </Text>
          <Text className="text-body">
            {formData.workingFields.join(', ') || 'N/A'}
          </Text>
        </View>

        <View>
          <Text className="text-caption text-muted-foreground">Location</Text>
          <Text className="text-body">
            {[formData.street, formData.city, formData.state, formData.country]
              .filter(Boolean)
              .join(', ') || 'N/A'}
          </Text>
        </View>

        <View>
          <Text className="text-caption text-muted-foreground">Contact</Text>
          <Text className="text-body">
            {formData.email}
            {formData.phone && ` • ${formData.phone}`}
          </Text>
        </View>

        <View>
          <Text className="text-caption text-muted-foreground">
            Working Days
          </Text>
          <Text className="text-body">
            {formData.workingDays.join(', ') || 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'basic':
        return renderBasicInfo();
      case 'location':
        return renderLocation();
      case 'contact':
        return renderContact();
      case 'hours':
        return renderWorkingHours();
      case 'review':
        return renderReview();
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="safe-area" edges={['top']}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom + (Platform.OS === 'ios' ? 50 : 90),
          paddingTop: Platform.OS === 'android' ? insets.top : 0,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 py-6">
          <Text className="text-heading font-bold text-foreground mb-6">
            Set Up Your Brand
          </Text>

          {renderStepIndicator()}

          <View className="mb-6">{renderCurrentStep()}</View>

          <View className="flex-row gap-3">
            {currentStep !== 'basic' && (
              <Button variant="outline" onPress={handleBack} className="flex-1">
                <Text>Back</Text>
              </Button>
            )}
            {currentStep !== 'review' ? (
              <Button onPress={handleNext} className="flex-1">
                <Text>Next</Text>
              </Button>
            ) : (
              <Button onPress={handleSubmit} className="flex-1">
                <Text>Submit</Text>
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SetUpStore;
