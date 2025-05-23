import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
      },
      header: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      headerText: {
        fontSize: 28,
        fontWeight: '800',
        fontStyle:'italic',
        color: '#1a1a1a',
        letterSpacing: 0.5,
      },
      menuContainer: {
        flexDirection: 'row',
        gap: 12,
      },
      menuButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      menuText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
      },
      carouselContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      carouselImage: {
        width: '100%',
        height: 200,
        borderRadius: 16,
      },
      carouselIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 12,
        left: 0,
        right: 0,
        gap: 8,
      },
      carouselIndicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      carouselIndicatorActive: {
        backgroundColor: '#fff',
        width: 12,
        height: 12,
        borderRadius: 6,
      },
      newsList: {
        flex: 1,
      },
      newsListContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      newsItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      newsImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 12,
        alignItems:'center',
        justifyContent:'center',
      },
      newsTextContainer: {
        flex: 1,
        flexDirection: 'column',
      },
      newsText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 4,
        lineHeight: 22,
      },
      newsSubtitleContainer: {
        flexDirection: 'column',
        marginTop: 4,
      },
      newsSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
      },
      newsDate: {
        fontSize: 12,
        color: '#999',
        alignSelf: 'flex-start',
      },
      profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
      },
      photoTitleContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
      },
      photoTitleInput: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
      },
})