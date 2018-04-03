import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
}) => {
  return (
    <View style={[styles.btnContainer, { height: 80,}]}>
      <TouchableHighlight style={styles.full}
        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >
       <Text style={[styles.nextButtonText, { color: rightTextColor, backgroundColor: '#ffffff', elevation: 3, width: '100%'}]}>
         {isDoneBtnShow ? doneBtnLabel : nextBtnLabel}
       </Text>
      </TouchableHighlight>
    </View>
  )
}

export default DoneButton
