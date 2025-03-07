import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';  
import { useNavigation } from '@react-navigation/native';
const CreateHabitScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Regular');
  const [selectedRepeat, setSelectedRepeat] = useState('Daily');
  const [selectedDays, setSelectedDays] = useState(['M', 'T', 'W', 'T', 'F']);
  const [selectedTime, setSelectedTime] = useState('Morning');
  const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const times = ['Morning', 'Afternoon', 'Evening'];
  const icons = ['🏀', '📅', '✍️', '🎮', '🎗️'];
  const colors = ['#99CCFF', '#FFCC99', '#AA9499', '#C6A4A4', '#FF9899', '#99C5C4', '#FF99CC', '#CCFFFF', '#CCFFCC', '#CC99FF', '#CCCCFF'];
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);  
  const [selectedColor, setSelectedColor] = useState<string | null>(null); 
  const handleDayPress = (day: string) => {  
    setSelectedDays((prev) =>  
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]  
    );  
  };  

  const handleIconPress = (icon: string) => {  
    setSelectedIcon(icon);  
  };  

  const handleColorPress = (color: string) => {  
    setSelectedColor(color);  
  };  

  const handleSaveHabit = () => {  
    if (!habitName.trim()) {  
      Alert.alert('Error', 'Habit name is required.');  
      return;  
    }   
    if (selectedRepeat === 'Weekly' && selectedDays.length === 0) {  
      Alert.alert('Error', 'Please select at least one day for weekly habits.');  
      return;  
    }    
    Alert.alert('Success', 'Habit Saved!');  
  };  
  return (  
    <ScrollView style={styles.container}>  
    
    <View style={styles.header}>  
          <TouchableOpacity onPress={() => navigation.goBack()}>  
            <MaterialCommunityIcons name="arrow-left" size={hp('3%')} color="black" />  
          </TouchableOpacity>  
          <Text style={styles.headerTitle}>Create New Habit</Text>  
        </View>  

      {}
      <View style={styles.Tcontainer}>  
      <View style={styles.tabContainer}>  
        <TouchableOpacity  
          style={[styles.tab, selectedTab === 'Regular' && styles.activeTab]}  
          onPress={() => setSelectedTab('Regular')}  
        >  
          <Text style={[styles.tabText, selectedTab === 'Regular' && styles.activeTabText]}>Regular Habit</Text>  
        </TouchableOpacity>  
        <TouchableOpacity  
          style={[styles.tab, selectedTab === 'One Time' && styles.activeTab]}  
          onPress={() => setSelectedTab('One Time')}  
        >  
          <Text style={[styles.tabText, selectedTab === 'One Time' && styles.activeTabText]}>One Time Task</Text>  
        </TouchableOpacity>  
      </View>  

      {}  
      <Text style={styles.label}>Habit Name</Text>  
      <CustomTextInput  
        placeholder="eg. Muzamil Mehdi"  
        value={habitName}  
        onChangeText={setHabitName}  
      />  

      {}  
      <Text style={styles.label}>Description</Text>  
      <CustomTextInput  
        placeholder="eg. Muzamil Mehdi"  
        value={description}  
        onChangeText={setDescription}  
        multiline  
      />  

      {}  
      <Text style={styles.label}>Icon</Text>  
      <View style={styles.iconContainer}>  
        {icons.map((icon, index) => (  
          <TouchableOpacity  
            key={index}  
            style={[  
              styles.iconButton,  
              selectedIcon === icon && styles.selectedIconButton,  
            ]}  
            onPress={() => handleIconPress(icon)}  
          >  
            <Text style={styles.icon}>{icon}</Text>  
          </TouchableOpacity>  
        ))}  
        <TouchableOpacity onPress={() => console.log('View all icons')}>  
          <Text style={styles.viewAll}>View all</Text>  
        </TouchableOpacity>  
      </View>  

      {}  
      <Text style={styles.label}>Color</Text>  
      <View style={styles.colorContainer}>  
        {colors.map((color, index) => (  
          <TouchableOpacity  
            key={index}  
            style={[  
              styles.colorCircle,  
              { backgroundColor: color },  
              selectedColor === color && styles.selectedColorCircle,  
            ]}  
            onPress={() => handleColorPress(color)}  
          />  
        ))}  
      </View>  

      {}  
      <Text style={styles.label}>Repeat</Text>  
      <View style={styles.optionContainer}>  
        {['Daily', 'Weekly', 'Monthly'].map((option) => (  
          <TouchableOpacity  
            key={option}  
            style={[  
              styles.optionButton,  
              selectedRepeat === option && styles.activeOption,  
            ]}  
            onPress={() => setSelectedRepeat(option)}  
          >  
            <Text style={[  
              styles.optionText,  
              selectedRepeat === option && styles.activeOptionText,  
            ]}>  
              {option}  
            </Text>  
          </TouchableOpacity>  
        ))}  
      </View>  

      {}  
      {selectedRepeat === 'Weekly' && (  
        <>  
          <Text style={styles.label}>On these days:</Text>  
          <View style={styles.daysContainer}>  
            {days.map((day) => (  
              <TouchableOpacity  
                key={day}  
                style={[  
                  styles.dayButton,  
                  selectedDays.includes(day) && styles.activeDay,  
                ]}  
                onPress={() => handleDayPress(day)}  
              >  
                <Text style={[  
                  styles.dayText,  
                  selectedDays.includes(day) && styles.activeDayText,  
                ]}>  
                  {day}  
                </Text>  
              </TouchableOpacity>  
            ))}  
          </View>  
        </>  
      )}  

      {}  
      <Text style={styles.label}>Do it at:</Text>  
      <View style={styles.optionContainer}>  
        {times.map((time) => (  
          <TouchableOpacity  
            key={time}  
            style={[  
              styles.optionButton,  
              selectedTime === time && styles.activeOption,  
            ]}  
            onPress={() => setSelectedTime(time)}  
          >  
            <Text style={[  
              styles.optionText,  
              selectedTime === time && styles.activeOptionText,  
            ]}>  
              {time}  
            </Text>  
          </TouchableOpacity>  
        ))}  
      </View>  
      </View>
      <CustomButton title="Save Habit" onPress={handleSaveHabit} />  
    </ScrollView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#fff',   
  },  
  header: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    width:wp('100%'),
    marginBottom: hp('2%'),   
    paddingVertical: hp('2%'),    
    shadowColor: '#000',         
    shadowOffset: {  
      width: 0,  
      height: 2,  
    },  
    shadowOpacity: 0.25,  
    shadowRadius: 3.84,  
    elevation: 5,                
    backgroundColor: '#fff',       
  },  
  headerTitle: {  
    fontSize: hp('2.5%'),  
    fontWeight: 'bold',  
    marginLeft: wp('10%'),  
  }, 
  Tcontainer:{
    paddingHorizontal:wp('5%'),
  },
  tabContainer: {  
    flexDirection: 'row',  
    marginTop: hp('2%'),  
 
  },  
  tab: {  
    flex: 1,  
    paddingVertical: hp('1.2%'),  
    alignItems: 'center',  
    borderRadius: wp('2.5%'),  
    backgroundColor: '#f0f0f0',  
    marginHorizontal: wp('1%'),  
  },  
  activeTab: {  
    backgroundColor: '#4CAF50',  
  },  
  tabText: {  
    color: '#333',  
    fontSize: hp('1.8%'),  
  },  
  activeTabText: {  
    color: '#fff',  
    fontWeight: 'bold',  
  },  
  label: {  
    fontSize: hp('2%'),  
    fontWeight: 'bold',  
    marginTop: hp('2%'),  
    marginBottom: hp('0.5%'),  
  },  
  input: {  
    borderWidth: 1,  
    borderColor: '#ccc',  
    padding: hp('1.2%'),  
    borderRadius: wp('2.5%'),  
    fontSize: hp('1.8%'),  
  },  
  multilineInput: {  
    minHeight: hp('10%'),  
    textAlignVertical: 'top', 
  },  
  iconContainer: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    marginTop: hp('1%'),  
    marginBottom: hp('1%'),  
  },  
  iconButton: {  
    padding: wp('3.3%'),  
    backgroundColor: '#fff',  
    borderColor: '#ccc',  
    borderWidth: 1,  
    borderRadius: wp('2.5%'),  
    marginRight: wp('2%'),  
  },  
  selectedIconButton: {  
    backgroundColor: '#e0f7fa',  
  },  
  icon: {  
    fontSize: hp('3%'),  
  },  
  viewAll: {  
    color: '#2ecc71',  
    marginLeft: wp('-8%'),
    bottom:hp('6%'),  
    fontSize: hp('1.8%'),  
  },  
  colorContainer: {  
    flexDirection: 'row',  
    flexWrap: 'wrap',  
    marginTop: hp('1%'),  
    marginBottom: hp('1%'),  
  },  
  colorCircle: {  
    width: wp('13%'),  
    height: hp('6%'),  
    borderRadius: wp('8%'),  
    marginRight: wp('2%'),  
    marginBottom: hp('1%'),  
    borderWidth: 1,  
    borderColor: '#ccc',  
  },  
  selectedColorCircle: {  
    borderWidth: 3,  
    borderColor: '#4CAF50',  
  },  
  optionContainer: {  
    flexDirection: 'row',  
    marginTop: hp('1%'),  
    marginBottom: hp('1%'),  
  },  
  optionButton: {  
    flex: 1,  
    paddingVertical: hp('1.2%'),  
    alignItems: 'center',  
    borderRadius: wp('2.5%'),  
    backgroundColor: '#f0f0f0',  
    marginHorizontal: wp('1%'),  
  },  
  activeOption: {  
    backgroundColor: '#4CAF50',  
  },  
  optionText: {  
    color: '#333',  
    fontSize: hp('1.8%'),  
  },  
  activeOptionText: {  
    color: '#fff',  
    fontWeight: 'bold',  
  },  
  daysContainer: {  
    flexDirection: 'row',  
    marginTop: hp('1%'),  
    marginBottom: hp('1%'),  
  },  
  dayButton: {  
    width: wp('8%'),  
    height: hp('4%'),  
    justifyContent: 'center',  
    alignItems: 'center',  
    marginRight: wp('1%'),  
    backgroundColor: '#f0f0f0',  
    borderRadius: wp('1%'),  
  },  
  activeDay: {  
    backgroundColor: '#4CAF50',  
  },  
  dayText: {  
    color: '#333',  
    fontSize: hp('1.6%'),  
  },  
  activeDayText: {  
    color: '#fff',  
    fontWeight: 'bold',  
    fontSize: hp('1.6%'),  
  },  
  saveButton: {  
    backgroundColor: '#4CAF50',  
    padding: hp('1.8%'),  
    alignItems: 'center',  
    borderRadius: wp('2.5%'),  
    marginTop: hp('3%'),  
  },  
  saveButtonText: {  
    color: '#fff',  
    fontSize: hp('2%'),  
    fontWeight: 'bold',  
  },  });
export default CreateHabitScreen;