//extensão ".ts" por que só vai existir códigos JavaScript e vou definir as regras visuais.
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1, /* flexbox por padrão no react native usado para posicionamento de elementos. Dessa forma ele irá ocupar toda a tela. */
        justifyContent: 'center', /*Alinhamento Vertical*/
        alignItems: 'center', /*Alinhamento Horizontal*/

    },
    image: {
        width: '100%',
        height: 360
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,

    }


});