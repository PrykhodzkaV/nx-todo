import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useGetAllToDosQuery } from '@nx-todo/todo-feature-lib';
export const HomeScreen = () => {
  const { data, loading, error } = useGetAllToDosQuery();
  return (
    <SafeAreaView>
        <Text>TODO:</Text>
        {data?.todos?.map((item) => {
          return (
            <View key={item._id}>
              <Text>{`${item.title} ${item.status}`}</Text>
            </View>
          );
        })}
    </SafeAreaView>
  );
};