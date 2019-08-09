import {Platform} from 'react-native'

export default {
    ...Platform.select({
        ios:{
            marginTop: 20
        },
        android:{
            marginTop: 24
        }
    }),

    fontXBig: 20,
    fontBig: 16,
    fontMedium: 14,
    fontSmall: 12
}