
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";

const App = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleAddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const handleDeleteTask = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1); // Remove 1 element from the array at the specified index splice(index, howmany, item1, ....., itemX)
        setTasks(newTasks);
    }

    const handleEditTask = (index) => {
        setEdit(true);
        setTask(tasks[index]);
        handleDeleteTask(index);
    }

    const renderItem = ({item, index}) => (
        <View style={styles.task}>
            <Text style={styles.itemList}>{item}</Text>
            <View
                style={styles.taskButtons}>
                <TouchableOpacity
                    onPress={() => handleEditTask(index)}>
                    <Text
                        style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDeleteTask(index)}>
                    <Text
                        style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.title}>ToDo App</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={task}
                onChangeText={setTask}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddTask}>
                <Text style={styles.addButtonText}>
                    Add Task
                </Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        color: "green",
    },
    input: {
        borderWidth: 3,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    addButton: {
        backgroundColor: "violet",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        fontSize: 18,
    },
    itemList: {
        fontSize: 19,
    },
    taskButtons: {
        flexDirection: "row",
    },
    editButton: {
        marginRight: 10,
        color: "green",
        fontWeight: "bold",
        fontSize: 18,
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default App;
