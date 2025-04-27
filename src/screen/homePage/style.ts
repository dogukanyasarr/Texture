import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerText:{
        fontSize: 24,
        fontStyle:'italic',
        fontWeight: 'bold',

      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      iconContainer: {
        flexDirection: 'row',
        gap: 10,
      },
      iconButton: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
      },
      carouselImage: {
        width: '90%',
        height: 180,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        
      },
      newsList: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      newsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      newsImage: {
        width: 85,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
      },
      newsTextContainer: {
        flex: 1,
      },
      newsText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
      },
      newsSubtitle: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
      },

})