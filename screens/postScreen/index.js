import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header } from './header';
import { styles } from './styles';

export const PostScreen = () => {

    const [userData, setUserData] = useState([])
    const [postData, setPostData] = useState([])

    const renderItem = ({ item }) => (
        <View style={styles.renderView}>
            <Text style={styles.renderText}>{`Name:  ${item.name}`}</Text>
            <Text style={styles.renderText}>{`company:  ${item.company.name}`}</Text>
            <Text style={styles.renderText}>{`Title:  ${postData[item.id]?.title}`}</Text>
            <Text style={styles.renderText}>{`Body:  ${postData[item.id]?.body}`}</Text>
        </View>
    )

    const fetchData = (
        async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
            const userData = await response.json([]);
            const postDataJson = await response2.json([]);
            setUserData(userData)
            setPostData(postDataJson)
        }
    )
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Header />
            <View style={styles.containter}>
                <FlatList
                    data={userData}
                    renderItem={renderItem}
                    style={styles.flatListView}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    )
}