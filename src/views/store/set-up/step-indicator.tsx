import { Text } from '@/components/ui';
import { cn } from '@/lib/utils';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps?: { label: string; id: string }[];
}

// Default steps if none provided
const DEFAULT_STEPS = [
  { label: 'SETUP', id: '01' },
  { label: 'LOCATE', id: '02' },
  { label: 'DETAILS', id: '03' },
  { label: 'VERIFY', id: '04' },
];

export function StepIndicator({
  currentStep,
  totalSteps = 4,
  steps = DEFAULT_STEPS,
}: StepIndicatorProps) {
  return (
    <View className="w-full">
      {/* Top Section: Steps */}
      <View className="flex-row justify-between items-start mb-6">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <View key={index} className="items-center flex-1 z-10">
              {/* The Box */}
              <AnimatedBox
                isActive={isActive}
                isCompleted={isCompleted}
                index={index}
              />

              {/* The Label */}
              <View
                className={cn(
                  'px-2 py-0.5 border border-black',
                  isActive ? 'bg-black' : 'bg-transparent border-transparent',
                )}
              >
                <Text
                  className={cn(
                    'text-[10px] uppercase font-bold tracking-widest',
                    isActive ? 'text-white' : 'text-gray-500',
                  )}
                >
                  {step.label}
                </Text>
              </View>
            </View>
          );
        })}

        {/* Connector Line (Background visual) */}
        <View className="absolute top-7 left-0 right-0 h-0.5 bg-black -z-10 mt-[1px]" />
      </View>

      {/* Brutalist Progress Bar */}
      <View className="border-2 border-black p-1 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <View className="flex-row justify-between mb-1">
          <Text className="text-[10px] font-bold uppercase">Progress</Text>
          <Text className="text-[10px] font-bold">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
          </Text>
        </View>
        <View className="h-4 w-full bg-gray-100 border border-black relative overflow-hidden">
          {/* Striped Background Pattern for empty state */}
          <View
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px',
            }}
          />
          <AnimatedProgress currentStep={currentStep} totalSteps={totalSteps} />
        </View>
      </View>
    </View>
  );
}

function AnimatedProgress({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(`${progress}%`, { damping: 15, stiffness: 100 }),
    };
  });

  return <Animated.View className="h-full bg-black" style={animatedStyle} />;
}

function AnimatedBox({
  isActive,
  isCompleted,
  index,
}: {
  isActive: boolean;
  isCompleted: boolean;
  index: number;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(isActive ? 1.05 : 1, { damping: 12 }) },
        { translateY: withSpring(isActive ? -4 : 0, { damping: 12 }) },
      ],
    };
  });

  return (
    <Animated.View
      style={animatedStyle}
      className={cn(
        'w-14 h-14 border-2 border-black justify-center items-center mb-2',
        isActive
          ? 'bg-primary border-b-4 border-r-4'
          : isCompleted
            ? 'bg-black border-b-2 border-r-2'
            : 'bg-white border-b-2 border-r-2',
      )}
    >
      <Text
        className={cn(
          'font-black text-lg',
          isCompleted ? 'text-white' : 'text-black',
        )}
      >
        {isCompleted ? '✓' : `0${index + 1}`}
      </Text>
    </Animated.View>
  );
}
