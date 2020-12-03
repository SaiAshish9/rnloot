import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import Input from '../components/input';
import Btn from './btn';
import {Context as AuthContext} from '../api/contexts/authContext';

const {width, height} = Dimensions.get('window');

const Email = ({navigation}) => {
  const {state, sendEmail} = useContext(AuthContext);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <View
      style={{
        backgroundColor: '#261D2A',
      }}>
      <ImageBackground
        source={require('../assets/dottedBackground.png')}
        style={{
          width,
          height,
          overflow: 'hidden',
          padding: width * 0.1,
        }}>
        <View
          style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Image
              style={{width: 48}}
              resizeMode="contain"
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '80%',
          }}>
          <View>
            <View style={{marginVertical: 15}}>
              <Input
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
                multiline
                style={{
                  height: height * 0.1,
                }}
              />
            </View>
            <View style={{marginVertical: 15}}>
              <Input
                placeholder="Description"
                multiline
                value={description}
                onChangeText={setDescription}
                style={{
                  height: height * 0.2,
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={async () => {
              if (!state.loading && title && description) {
                await sendEmail(title, description);
              }
            }}
            style={{
              width: '100%',
              height: height * 0.1,
            }}>
            {!state.loading ? (
              <Btn text="SUBMIT" x="54" />
            ) : (
              <>
                <Btn text={' '} x="54" />
                <ActivityIndicator
                  color="#ECDBFA"
                  size="small"
                  style={{bottom: 63}}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Email;
