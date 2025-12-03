import {
  BrutalCard,
  BrutalCheckbox,
  BrutalHeader,
  BrutalInfoBox,
} from '@/components/brutalism';
import { Button, Text } from '@/components/ui';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Store: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <SafeAreaView className="safe-area" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-6 gap-8">
          {/* Page Title */}
          <View className="brutal-card-lg">
            <Text className="brutal-heading">BRUTALISM</Text>
            <Text className="brutal-subheading text-gray-600 mt-2">
              Design System Showcase
            </Text>
          </View>

          {/* Section 1: Headers */}
          <View className="gap-4">
            <Text className="brutal-divider">📋 HEADERS</Text>

            <BrutalHeader
              number="01"
              title="BASIC INFO"
              subtitle="Tell us about your brand"
            />

            <BrutalHeader
              number="02"
              title="LOCATION"
              subtitle="Where is your brand located?"
            />
          </View>

          {/* Section 2: Cards */}
          <View className="gap-4">
            <Text className="brutal-divider">🎴 CARDS</Text>

            <BrutalCard shadow="sm" border="thin">
              <Text className="brutal-label">Small Card</Text>
              <Text className="brutal-body text-gray-600">
                Thin border + small shadow
              </Text>
            </BrutalCard>

            <BrutalCard shadow="md" border="medium">
              <Text className="brutal-label">Medium Card (Default)</Text>
              <Text className="brutal-body text-gray-600">
                Medium border + medium shadow
              </Text>
            </BrutalCard>

            <BrutalCard shadow="lg" border="thick">
              <Text className="brutal-label">Large Card</Text>
              <Text className="brutal-body text-gray-600">
                Thick border + large shadow
              </Text>
            </BrutalCard>

            <BrutalCard shadow="xl" border="thick">
              <Text className="brutal-label">Extra Large Card</Text>
              <Text className="brutal-body text-gray-600">
                Thick border + extra large shadow
              </Text>
            </BrutalCard>
          </View>

          {/* Section 3: Info Boxes */}
          <View className="gap-4">
            <Text className="brutal-divider">💬 INFO BOXES</Text>

            <BrutalCard>
              <Text className="brutal-label mb-2">Default Info</Text>
              <BrutalInfoBox variant="default">
                ℹ️ This is a default info box with gray styling
              </BrutalInfoBox>
            </BrutalCard>

            <BrutalCard>
              <Text className="brutal-label mb-2">Information</Text>
              <BrutalInfoBox variant="info">
                📧 This is an info box with blue styling
              </BrutalInfoBox>
            </BrutalCard>

            <BrutalCard>
              <Text className="brutal-label mb-2">Warning</Text>
              <BrutalInfoBox variant="warning">
                ⚠️ This is a warning box with yellow styling
              </BrutalInfoBox>
            </BrutalCard>

            <BrutalCard>
              <Text className="brutal-label mb-2">Success</Text>
              <BrutalInfoBox variant="success">
                ✅ This is a success box with green styling
              </BrutalInfoBox>
            </BrutalCard>
          </View>

          {/* Section 4: Checkboxes */}
          <View className="gap-4">
            <Text className="brutal-divider">☑️ CHECKBOXES</Text>

            <BrutalCheckbox
              checked={checked1}
              onPress={() => setChecked1(!checked1)}
              label="Unchecked Example"
            />

            <BrutalCheckbox
              checked={checked2}
              onPress={() => setChecked2(!checked2)}
              label="Checked Example"
            />
          </View>

          {/* Section 5: Typography */}
          <View className="gap-4">
            <Text className="brutal-divider">🔤 TYPOGRAPHY</Text>

            <BrutalCard>
              <Text className="brutal-heading mb-2">Heading Text</Text>
              <Text className="brutal-subheading mb-2">Subheading Text</Text>
              <Text className="brutal-label mb-2">Label Text</Text>
              <Text className="brutal-body mb-2">Body Text</Text>
              <Text className="brutal-caption">Caption Text</Text>
            </BrutalCard>
          </View>

          {/* Section 6: CSS Classes */}
          <View className="gap-4">
            <Text className="brutal-divider">🎨 CSS CLASSES</Text>

            <BrutalCard>
              <Text className="brutal-label mb-3">Borders</Text>
              <View className="gap-2">
                <View className="brutal-border-thin bg-white p-2">
                  <Text className="brutal-body">brutal-border-thin</Text>
                </View>
                <View className="brutal-border bg-white p-2">
                  <Text className="brutal-body">brutal-border (medium)</Text>
                </View>
                <View className="brutal-border-thick bg-white p-2">
                  <Text className="brutal-body">brutal-border-thick</Text>
                </View>
              </View>
            </BrutalCard>

            <BrutalCard>
              <Text className="brutal-label mb-3">Shadows</Text>
              <View className="gap-3">
                <View className="brutal-border bg-white p-2 brutal-shadow-sm">
                  <Text className="brutal-body">brutal-shadow-sm</Text>
                </View>
                <View className="brutal-border bg-white p-2 brutal-shadow">
                  <Text className="brutal-body">brutal-shadow (medium)</Text>
                </View>
                <View className="brutal-border bg-white p-2 brutal-shadow-lg">
                  <Text className="brutal-body">brutal-shadow-lg</Text>
                </View>
                <View className="brutal-border bg-white p-2 brutal-shadow-xl">
                  <Text className="brutal-body">brutal-shadow-xl</Text>
                </View>
              </View>
            </BrutalCard>

            <BrutalCard>
              <Text className="brutal-label mb-3">3D Effects</Text>
              <View className="gap-3">
                <View className="brutal-border bg-white p-2 brutal-3d-sm">
                  <Text className="brutal-body">brutal-3d-sm</Text>
                </View>
                <View className="brutal-border bg-white p-2 brutal-3d">
                  <Text className="brutal-body">brutal-3d (medium)</Text>
                </View>
              </View>
            </BrutalCard>

            <BrutalCard>
              <Text className="brutal-label mb-3">Combined Classes</Text>
              <View className="brutal-card">
                <Text className="brutal-body">brutal-card</Text>
                <Text className="brutal-caption text-gray-500 mt-1">
                  (bg-white + p-4 + brutal-border + brutal-shadow)
                </Text>
              </View>

              <View className="brutal-card-lg mt-3">
                <Text className="brutal-body">brutal-card-lg</Text>
                <Text className="brutal-caption text-gray-500 mt-1">
                  (bg-white + p-6 + brutal-border-thick + brutal-shadow-lg)
                </Text>
              </View>
            </BrutalCard>
          </View>

          {/* Section 7: Buttons */}
          <View className="gap-4">
            <Text className="brutal-divider">🔘 BUTTONS</Text>

            <Button className="brutal-button h-14 bg-primary">
              <Text className="brutal-button-text text-primary-foreground">
                Primary Button
              </Text>
            </Button>

            <Button className="brutal-button h-14 bg-black">
              <Text className="brutal-button-text text-white">
                Secondary Button
              </Text>
            </Button>

            <Button className="brutal-button h-14 bg-white">
              <Text className="brutal-button-text text-black">
                Outline Button
              </Text>
            </Button>
          </View>

          {/* Section 8: Progress Bar */}
          <View className="gap-4">
            <Text className="brutal-divider">📊 PROGRESS BAR</Text>

            <View className="brutal-progress">
              <View className="flex-row justify-between mb-1">
                <Text className="brutal-caption">Progress</Text>
                <Text className="brutal-caption">60%</Text>
              </View>
              <View className="brutal-progress-bar">
                <View
                  className="brutal-progress-fill"
                  style={{ width: '60%' }}
                />
              </View>
            </View>

            <View className="brutal-progress">
              <View className="flex-row justify-between mb-1">
                <Text className="brutal-caption">Loading</Text>
                <Text className="brutal-caption">100%</Text>
              </View>
              <View className="brutal-progress-bar">
                <View
                  className="brutal-progress-fill"
                  style={{ width: '100%' }}
                />
              </View>
            </View>
          </View>

          {/* Footer */}
          <BrutalCard shadow="lg" border="thick" className="bg-primary">
            <Text className="brutal-heading text-primary-foreground">
              END OF SHOWCASE
            </Text>
            <Text className="brutal-body text-primary-foreground mt-2">
              Use these components and CSS classes throughout your app for
              consistent brutalist design! 🎨
            </Text>
          </BrutalCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Store;
