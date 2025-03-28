import { Text, View,TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {Participant} from "../components/Participant";
import React,{useState} from "react";
import {styles} from "./styles";

export  function Home(){
   
   const[ item,setitem] = useState<string[]>([])
   const[itemName, setitemName] = useState("");
    
  
    function handleParticipanteAdd(){
        if (item.includes(itemName)) {
            return Alert.alert("Erro ao adicionar item",`${itemName} já exite na sua lista de compras`);
        }
        setitem(prevState => [...prevState,itemName]);
        setitemName('')
    }
    function handleParticipantRemove(name:string){
        
       
        
        Alert.alert("Remover", `Remover o item ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setitem(prevState => prevState.filter(item => item!==name))
                
            },
            {
                text: 'Não',
                style: 'cancel'
            }
            
        ]);
        console.log(`Remover ${name}`);
    }
    return(

        <View style={styles.container}>
         
                <Text
                    style={styles.eventName}
                > Lista de compras supermercado: </Text>

            <Text style={styles.eventDate}> Sexta,10 de maio de 2030 </Text>
        
           <View style={styles.form}>
               <TextInput
                   style={styles.input}
                   placeholder="Nome do Item"
                   placeholderTextColor="6B6B6B"
                    onChangeText={setitemName}
                   value={itemName}
               />
               <TouchableOpacity style={styles.button} onPress={handleParticipanteAdd}>
                   <Text style={ styles.buttonText}>
                       +
                   </Text>
               </TouchableOpacity>


           </View>
            <FlatList 
                data={item}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item}
                      renderItem={ ({ item })=>(
                          <Participant
                              key={item}
                              name={item}
                              onRemove={()=>handleParticipantRemove(item)}
                              onAdd={handleParticipanteAdd}

                          />
                      )}
                ListEmptyComponent={()=>(
                    <Text style ={styles.listEmptyText}>
                     Não há itens de supermercado aqui
                    </Text>
                )}
            
                />
     
           
         
        </View>
    );
}