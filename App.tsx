import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
// @ts-ignore
import SvgRefresh from './assets/icons/refresh.svg';

const DATA = [
  {
    title: '第一学期',
    data: [
      {
        isFolded: true,
        id: '1',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '2',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '3',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '4',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '5',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '6',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '7',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
    ],
  },
  {
    title: '第二学期',
    data: [
      {
        isFolded: true,
        id: '8',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
      {
        isFolded: true,
        id: '9',
        name: '中国近代史纲要',
        required: false,
        credit: 3,
        score: '80',
        detail: {
          ordinary: ['73.0', '74%'],
          mid: ['76.0', '20%'],
          end: ['80.0', '30%'],
          total: ['80.0', '100%'],
        },
      },
    ],
  },
];
//@ts-ignore
const Item = ({data, onPress, isSelected}) => (
  <TouchableOpacity style={styles.item} onPress={onPress} disabled={isSelected}>
    <View style={styles.item_main}>
      <View style={styles.item_main_left}>
        <Text style={styles.item_title}>{data.name}</Text>
        <Text style={styles.item_info}>
          {data.required ? '必修' : '选修'} | 学分：{data.credit}
        </Text>
      </View>
      <View style={styles.item_score}>
        <Text style={styles.item_score_text}>{data.score}</Text>
      </View>
    </View>
    {isSelected && (
      <View>
        <Text style={styles.item_detail_text}>
          平时：{data.detail.ordinary[0]} | 占比：{data.detail.ordinary[1]}
        </Text>
        <Text style={styles.item_detail_text}>
          期中：{data.detail.mid[0]} | 占比：{data.detail.mid[1]}
        </Text>
        <Text style={styles.item_detail_text}>
          期末：{data.detail.end[0]} | 占比：{data.detail.end[1]}
        </Text>
        <Text style={styles.item_detail_text}>
          总评：{data.detail.total[0]} | 占比：{data.detail.total[1]}
        </Text>
      </View>
    )}
  </TouchableOpacity>
);

const initYears = (studentId: string = '2010400438') => {
  const date = new Date();
  const startYear = parseInt(studentId.slice(0, 2));
  const yearInterval =
    parseInt(date.getFullYear().toString().slice(2, 4)) - startYear;

  let baseString = '20';
  let years = [];
  for (let i = 0, year = startYear; i < yearInterval + 1; i++, year++) {
    years.push(`${baseString}${year}`);
  }
  console.log(years);
  return years;
};

const App = () => {
  const [years, setYears] = useState(initYears());
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.id;
    return (
      <Item
        data={item}
        onPress={() => {
          setSelectedItem(item.id);
        }}
        isSelected={isSelected}
      />
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.filter}>
        <View>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedYear(itemValue);
            }}>
            {years.map((item, index) => (
              <Picker.Item label={item} value={index} />
            ))}
          </Picker>
        </View>
        <View>
          <Picker
            selectedValue={selectedSemester}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedSemester(itemValue)
            }>
            <Picker.Item label="第一学期" value={1} />
            <Picker.Item label="第二学期" value={2} />
            <Picker.Item label="整个学年" value={0} />
          </Picker>
        </View>
        <TouchableOpacity style={styles.refresh}>
          <SvgRefresh width={32} height={32}></SvgRefresh>
        </TouchableOpacity>
      </View>
      <Text style={styles.gpa}>该学期绩点为 3.29 ，努力总会有回报哒！</Text>
      <SafeAreaView>
        <SectionList
          style={styles.list}
          sections={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.list_header}>{title}</Text>
          )}
          ListFooterComponent={
            <Text style={styles.list_placeholder}>已经到底啦！</Text>
          }
          extraData={selectedItem}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
    paddingTop: 0,
    marginBottom: 5,
    borderRadius: 5,
    borderBottomColor: '#3498db',
    borderBottomWidth: 1,
  },
  item_main: {
    display: 'flex',
    flexDirection: 'row',
  },
  item_main_left: {
    flex: 8,
  },
  item_title: {
    paddingVertical: 5,
    borderBottomColor: '#fa8c16',
    borderBottomWidth: 3,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#434343',
  },
  item_info: {
    marginVertical: 3,
    color: '#8c8c8c',
  },
  item_score: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  item_score_text: {
    color: '#40a9ff',
    fontSize: 30,
  },
  item_detail_text: {
    color: '#8c8c8c',
  },
  page: {
    backgroundColor: '#f5f5f5',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    color: '#000',
  },
  picker: {
    height: 50,
    width: 140,
    color: '#1f1f1f',
  },
  refresh: {
    marginRight: 0,
    paddingLeft: 'auto',
    flex: 1,
  },
  gpa: {
    paddingVertical: 8,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ffe599',
    color: '#e69138',
  },
  list: {
    paddingTop: 10,
    paddingHorizontal: 16,
    width: '100%',
  },
  list_header: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#bae7ff',
    color: '#112A46',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list_placeholder: {
    height: 200,
    textAlign: 'center',
    color: '#91d5ff',
  },
});

export default App;
