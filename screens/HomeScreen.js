import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../themes'

export default function HomeScreen() {
    return (
        <ScreenWrapper className="flex-1">
            <View>
                <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Dating App</Text>
            </View>
        </ScreenWrapper>
    )
}