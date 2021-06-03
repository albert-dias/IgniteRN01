import React, { Fragment, useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDark, setIsDark] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle !== ''){
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      setTasks(oldState => [...oldState, data]);
    }
    
  }

  function handleMarkTaskAsDone(id: number) {
    const updateTask = tasks.map(task => {
      return (task.id === id)?{...task, done: !task.done}:task;
    } );

    setTasks(updateTask)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTasks => oldTasks.filter(
      task => task.id !== id
    ))
  }

  return (
    <View style={{backgroundColor:(isDark)?'#262626':'#Fff', flex:1}}>
      <Header setIsDark={setIsDark} isDark={isDark}/>

      <TodoInput addTask={handleAddTask} isDark={isDark}/>

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        isDark={isDark}
      />
    </View>
  )
}