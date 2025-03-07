import React, { useState } from 'react';  
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';  

type HabitItem = {  
  id: string;  
  name: string;  
  icon: string;  
  color: string;  
  emoji?: string;  
  completed?: boolean;  
};  

type TimeFilter = 'all' | 'morning' | 'afternoon' | 'evening';  

interface HomeScreenProps {  
  navigation: any;  
}  

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {  
  const [selectedTab, setSelectedTab] = useState<'today' | 'weekly' | 'overall'>('today');  
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<TimeFilter>('all');  

  const habitCategories: HabitItem[] = [  
    { id: '1', name: '🎯 Set Small Goals', icon: 'target', color: '#FF9899' },  
    { id: '2', name: '🏆 Work', icon: 'briefcase', color: '#CCCCFF' },  
    { id: '3', name: '🎮 Gaming', icon: 'gamepad', color: '#CCFFCC' },  
  ];  

  const completedHabits: HabitItem[] = [  
    { id: '4', name: '🏅 Boost Productivity', icon: 'rocket', color: '#99CCFF', completed: true },  
    { id: '5', name: '🪢 Work Overload', icon: 'exclamation-circle', color: '#FF99CC', completed: true },  
    { id: '6', name: '🏀 Basketball', icon: 'basketball-ball', color: '#99C5C4', completed: true },  
    { id: '7', name: '🎭 Cluttered Enviroment', icon: 'basketball-ball', color: '#F4E4FF', completed: true },  
  ];  

  const handleTabPress = (tab: 'today' | 'weekly' | 'overall') => setSelectedTab(tab);  
  const handleTimeFilterPress = (filter: TimeFilter) => setSelectedTimeFilter(filter);  

  return (  
    <View style={styles.container}>  
      {}  
      <View style={styles.headerContainer}>  
        <View style={styles.header}>  
          <Image source={require('../assets/images/group.png')} style={styles.logo} />  
          <View style={styles.titleContainer}>  
            <Text style={styles.title}>Home</Text>  
          </View>  
        </View>  

        <View style={styles.headerShadow} />  
      </View>  

      <ScrollView contentContainerStyle={styles.scrollContent}>  
        {}  
        <View style={styles.tabsContainer}>  
          {['today', 'weekly', 'overall'].map((tab) => (  
            <TouchableOpacity  
              key={tab}  
              style={[styles.tabButton, selectedTab === tab && styles.selectedTab]}  
              onPress={() => handleTabPress(tab as any)}  
            >  
              <Text style={[styles.tabText, selectedTab === tab && { color: 'white' }]}>  
                {tab.charAt(0).toUpperCase() + tab.slice(1)}  
              </Text>  
            </TouchableOpacity>  
          ))}  
        </View>  

        {}  
        <View style={styles.timeFiltersContainer}>  
          {['all', 'morning', 'afternoon', 'evening'].map((filter) => (  
            <TouchableOpacity  
              key={filter}  
              style={[styles.timeFilterButton, selectedTimeFilter === filter && styles.selectedFilter]}  
              onPress={() => handleTimeFilterPress(filter as any)}  
            >  
              <Text style={[styles.timeFilterText, selectedTimeFilter === filter && { color: 'white' }]}>  
                {filter.charAt(0).toUpperCase() + filter.slice(1)}  
              </Text>  
            </TouchableOpacity>  
          ))}  
        </View>  

        {}  
        {}  
        <View style={styles.habitsContainer}>  
          {habitCategories.map((habit) => (  
            <TouchableOpacity  
              key={habit.id}  
              style={[styles.habitItem, { backgroundColor: habit.color }]}  
            >  
              <View style={styles.habitContent}>  
                {}  
                <Text style={styles.habitText}>{habit.name}</Text>  
              </View>  
            </TouchableOpacity>  
          ))}  
        </View>  

        {}  
        <Text style={styles.sectionTitle}>Completed</Text>  
        <View style={styles.habitsContainer}>  
          {completedHabits.map((habit) => (  
            <View  
              key={habit.id}  
              style={[styles.habitItem, { backgroundColor: habit.color }]}  
            >  
              <View style={styles.habitContent}>  
                {}  
                <Text style={styles.habitText}>{habit.name} {habit.emoji}</Text>  
              </View>  
              <Icon name="check-circle" size={20} color="#fff" style={styles.checkIcon} />  
            </View>  
          ))}  
        </View>  
      </ScrollView>  

      {}  
      <View style={styles.footer}>  
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>  
          <Image source={require('../assets/images/icon/home.png')} style={styles.footerIcon} />  
          <Text style={styles.footerText}>Home</Text>  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Groups')}>  
          <Image source={require('../assets/images/icon/group.png')} style={styles.footerIcon} />  
          <Text style={styles.footerText}>Groups</Text>  
        </TouchableOpacity>  

        {}  
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Habit')}>  
          <View style={styles.plusIconContainer}>  
            <Image source={require('../assets/images/icon/plus.png')} style={styles.plusIcon} />  
          </View>  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>  
          <Image source={require('../assets/images/icon/setting.png')} style={styles.footerIcon} />  
          <Text style={styles.footerText}>Settings</Text>  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>  
          <Image source={require('../assets/images/icon/user.png')} style={styles.footerIcon} />  
          <Text style={styles.footerText}>Profile</Text>  
        </TouchableOpacity>  
      </View>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#FFFFFF',  
  },  
  headerContainer: {  
    backgroundColor: 'white',  
    marginBottom: hp('1%'),
    ...Platform.select({  
      ios: {  
        shadowColor: '#000',  
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.1,  
        shadowRadius: 4,  
      },  
      android: {  
        elevation: 6,  
      }  
    })  
  },  
  header: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    padding: wp('5%'),
  },  
  headerShadow: {  
    position: 'absolute',  
    bottom: -20,  
    left: 0,  
    right: 0,  
    height: 20,  
  },  
  logo: {  
    width: wp('7%'),
    height: hp('3.5%'),
    marginRight: wp('5%'),
  },  
  titleContainer: {  
    flex: 1,
    alignItems: 'center',
  },  

  title: {  
    fontSize: hp('3%'),
    fontWeight: 'bold',  
    color: '#1A1A1A',  
  },  
  scrollContent: {  
    paddingHorizontal: wp('5%'),
  },  
  tabsContainer: {  
    flexDirection: 'row',  
    marginBottom: hp('2%'),
    backgroundColor: '#F5F5F5',  
    borderRadius: 8,  
    padding: 4,  
  },  
  tabButton: {  
    flex: 1,  
    paddingVertical: hp('1.5%'),
    alignItems: 'center',  
    borderRadius: 6,  
  },  
  selectedTab: {  
    backgroundColor: '#4CAF50',  
  },  
  tabText: {  
    fontSize: hp('1.7%'),
    fontWeight: '500',  
    color: '#666666',  
  },  
  timeFiltersContainer: {  
    flexDirection: 'row',  
    marginBottom: hp('2%'),
    gap: 8,  
  },  
  timeFilterButton: {  
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: 8,  
    backgroundColor: 'white',  
    borderWidth: 1,  
    borderColor: '#ddd',  
  },  
  selectedFilter: {  
    backgroundColor: '#4CAF50',  
    borderColor: '#2ecc71',  
  },  
  timeFilterText: {  
    fontSize: hp('1.7%'),
    color: '#666666',  
  },  
  sectionTitle: {  
    fontSize: hp('2.2%'),
    fontWeight: '600',  
    color: '#1A1A1A',  
    marginBottom: hp('1.8%'),
  },  
  habitsContainer: {  
    gap: 12,  
    marginBottom: hp('2.5%'),
  },  
  habitItem: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'space-between',  
    padding: wp('4%'),
    borderRadius: 8,  
    borderWidth: 1,  
    borderColor: '#ddd',  
  },  
  habitContent: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    gap: 12,  
  },  
  habitText: {  
    fontSize: hp('2%'),
    color: '#1A1A1A',  
  },  
  checkIcon: {  
    marginLeft: 10,  
  },  
  footer: {  
    flexDirection: 'row',  
    justifyContent: 'space-around',  
    alignItems: 'center',  
    backgroundColor: '#fff',
    borderTopWidth: 1,  
    borderTopColor: '#ddd',  
    paddingVertical: hp('1.2%'),
  },  
  footerItem: {  
    alignItems: 'center',  
    justifyContent: 'center',
    flex: 1,
  },  
  footerText: {  
    fontSize: hp('1.5%'),
    color: '#333',  
    marginTop: 5,  
    textAlign: 'center',
  },  
  plusIconContainer: {  
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',  
    justifyContent: 'center',  
    marginBottom: 5,
  },  
  footerIcon: {  
    width: wp('6%'),
    height: hp('3%'),
    resizeMode: 'contain',  
  },  

  plusIcon: {  
    width: wp('7.5%'),
    height:hp('7.5%'),
    resizeMode:'contain'
  },
});

export default HomeScreen;