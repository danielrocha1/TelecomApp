import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, ScrollView } from "react-native";
import ViewNotif from "../../components/Notifications/SemPrazo"
import ViewPrazoNotif from "../../components/Notifications/Prazo"

import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const types = ["emergencial", "instalacao", "reparo", "fatura"]
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [notify, setNotify] = useState(false);
  

  // const notificationListener = useRef();
  // const responseListener = useRef();

  const [items, setItems] = useState([]);
  
  const ListNotif = () => {
    return items.map((item) => {
      if (!item.request.content.data.prazo) {
        return (
          <ViewNotif
            id={item.request.identifier}
            title={item.request.content.title}
            body={item.request.content.body}
            data={item.request.content.data.data}
          />
        );
      } else {
        return (
          <ViewPrazoNotif
            id={item.request.identifier}
            title={item.request.content.title}
            body={item.request.content.body}
            data={item.request.content.data.data}
            prazo={item.request.content.data.prazo}
          />
        );
      }
    });
  };

    

  const getNotifyFunction = async () => {
      try {
        types.map((type) => {
          AsyncStorage.getItem(type).then((result) => {
            if(result==null){
              console.log("vazio", type)
              }else{
                console.log("CARALHO",result)
                var notif = JSON.parse(result);
                setItems((prevItem) => [...prevItem, notif]);
              }
          })
            });
        //const listItems = result.map((obj) => console.log("AQUI!!",JSON.parse(obj)))
    } catch (error) {
        console.log('DEU RUIM!!', error);
    }
  };

  useEffect(() => {
    if (items.length > 0 && items[0] != null) {
      //console.log('true Notify', items);
      setNotify(true);
    } else {
      setNotify(false);
      //console.log('false Notify');
    }
  }, [items]);

  useEffect(() => {
    console.log('AsyncStorage mudou');
  }, [notify]);

  useEffect(() => {
    getNotifyFunction()
    registerForPushNotificationsAsync().then((token) => {
       AsyncStorage.setItem("Token",token)
       setExpoPushToken(token)
       }
    );

    // notificationListener.current =
    //   Notifications.addNotificationReceivedListener((notification) => {
    //     AsyncStorage.setItem(
    //      notification.request.content.data.type,
    //       JSON.stringify(notification)
    //     );
        
    //     setNotification(notification);
      });

    // responseListener.current =
    //   Notifications.addNotificationResponseReceivedListener((response) => {
    //     if (response){
    //      AsyncStorage.setItem(
    //        notification.request.content.data.type,
    //        JSON.stringify(notification)
    //      ); 
    //      console.log(response)
    //     }
    //   });

    return () => {
      // Notifications.removeNotificationSubscription(
      //   notificationListener.current
      // );
      // Notifications.removeNotificationSubscription(responseListener.current);
    };
  
  if (notification && notification.request.content.data.prazo) {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: '', marginTop: 50 }}>
            <ViewPrazoNotif
              id={notification.request.identifier}
              title={notification && notification.request.content.title}
              body={notification && notification.request.content.body}
              data={notification && notification.request.content.data.data}
              prazo={notification && notification.request.content.data.prazo}
            />
            <ListNotif />
            <View>
              <Button
                title="Press to schedule a notification"
                onPress={async () => {
                  schedulePushNotification();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  if (notification && !notification.request.content.data.prazo) {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: '', marginTop: 50 }}>
            <ViewNotif
              id={notification.request.identifier}
              title={notification && notification.request.content.title}
              body={notification && notification.request.content.body}
              data={notification && notification.request.content.data.data}
            />
            <ListNotif />
            <View>
              <Button
                title="Press to schedule a notification"
                onPress={async () => {
                  schedulePushNotification();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  if (notify) {
    return (
      <ScrollView>
        <View style={{ marginTop: 30, flex: 1 }}>
          <ListNotif />
          <View style={{ backgroundColor: '', marginTop: 20 }}>
            <View>
              <Button
                title="Press to schedule a notification"
                onPress={async () => {
                  schedulePushNotification();
                }}
              />
            </View>
            <View style={{ marginTop: 5 }}>
              <Button
                color="red"
                title="Press to Remove the Notifications"
                onPress={async () => {
                  AsyncStorage.clear();
                  setNotify(false);
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '', marginTop: 50 }}>
          <View style={{ alignItems:'center', justifyContent:"center" }}>
            <Text style={{ fontWeight:'600', fontSize: 19 }}>Sem Notificações</Text>
          </View>
        </View>
      </View>
    );
  }

  async function schedulePushNotification() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Atenção ⚠️',
        body: 'Seu reparo foi realizado, por favor retorne o contato caso identifique qualquer problema novamente',
        data: { type:'emergencial', data: date + '-' + month + '-' + year, prazo: '24h' },
      },
      trigger: { seconds: 1 },
    });
  }
}

//PERMISSÕES
export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

