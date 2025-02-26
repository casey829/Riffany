import { Text, View, FlatList, TouchableOpacity, ImageBackground,Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'
import * as Animatable from 'react-native-animatable';
import { Video} from 'expo-video';



const zoomIn = {
  0: {
     scale: 0.9
  },
  1: {
    scale: 1,
  }
}


const zoomOut = {
  0: {
     scale: 1
  },
  1: {
    scale: 0.9,
  }
}


const TrendingItem = ({activeItem, item}) => {

  const [play, setPlay] = useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [play]);


  return (
    <Animatable.View
     className ="mr-5"
     animation={activeItem === item.$id ? zoomIn : zoomOut}
     duration={500}
    >
     {play ? (
        <Video
          ref={videoRef}
          source={{ uri: item.video }}
          style={{ width: 208, height: 288, borderRadius: 35, marginTop: 12, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          resizeMode='contain'
          useNativeControls
          shouldPlay={play}
          onPlaybackStatusUpdate={(status) => {
            if(status.didJustFinish){
              setPlay(false);
            }
          }}
        />
      ) : (
          <TouchableOpacity className='relative justify-center items-center' activeOpacity={0.7}
          onPress={() => setPlay(true)}>
            <ImageBackground 
            source={{
              uri: item.thumbnail
            }}
            className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
            resizeMode='cover'
            />
          <Image 
            source={icons.play}
            resizeMode='contain'
            className='w-12 h-12 absolute'
          />

          </TouchableOpacity>
        )
      }
    </Animatable.View>
  )
}


const Trending = ({posts}) => {
  const [activeItem, setActiveItem] = useState(posts[0])

  const viewableItemsChanged = ({viewableItems}) => {
    if(viewableItems.length > 0){
    setActiveItem(viewableItems[0].key)
    }
  }

  return (
    <FlatList 
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) =>(
         <TrendingItem activeItem={activeItem} item={item}/>
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 70
      }}
      contentOffset={{x:170}}
      horizontal
    />
  )
}

export default Trending;