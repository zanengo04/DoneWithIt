import React, {useState} from 'react'
import { FlatList, StyleSheet, View } from 'react-native'


import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
const intialMessages =[
    {
        id:1,
        title: 'Inquiry to buy',
        description: 'How much are you selling the item for',
        image: require('../assets/profile.jpg')
    },

    {
        id:2,
        title: 'Following up',
        description: 'Is the item still available for sale?',
        image: require('../assets/profile.jpg')
    },
]

export default function MessagesScreen() {
    const [refreshing, setRefreshing] = useState(false)
    const[messages, setMessages] = useState(intialMessages)
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor = {messages => messages.id.toString()}
                renderItem={({item}) => 
                <ListItem 
                    title = {item.title}
                    subTitle = {item.description}
                    image = {item.image}
                    onPress = {()=> console.log("Message selected", item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() =>{
                    setMessages([
                        {
                            id:2,
                            title: 'T2',
                            description: 'T2',
                            image: require('../assets/profile.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})