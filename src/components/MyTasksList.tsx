import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface FlatComp{
  isDark:boolean;
}
function FlatListHeaderComponent({isDark}:FlatComp) {
  return (
    <View>
      <Text style={[styles.header,{color:(!isDark)?'#3D3D4D':'#BF4AD4'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  isDark: boolean,
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress, isDark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={()=> onPress(item.id)}
            onLongPress={()=> onLongPress(item.id)}
            style={(item.done)?[styles.taskButtonDone, {backgroundColor:(!isDark)?'rgba(25, 61, 223, 0.1)':'#222'}]:[styles.taskButton]}
          >
            <View 
              testID={`marker-${index}`}
              style={(item.done)?[styles.taskMarkerDone, {backgroundColor:(!isDark)?'#273FAD':'#12A952'}]:[styles.taskMarker, {borderColor:(!isDark)?'#3D3D4D':'#12A952'}]} 
            />
            <Text 
              style={(item.done)?[styles.taskTextDone, {color:(!isDark)?'#A09CB1':'rgba(225, 225, 230, 0.6)'}]:[styles.taskText, {color:(!isDark)?'#3D3D4D':'#E1E1E6'}]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDark={isDark}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})