export function seasonIcon(season){
    if(season === 'Winter'){
        return {
            text :'Hey, its winter',
            iconName: 'snowflake'
        }
    }else{
        return {
            text : 'Its Summer',
            iconName: 'sun'
        }
    }
} 