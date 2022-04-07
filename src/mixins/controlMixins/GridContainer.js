
 export default {
    computed:{
      gridStyle(){
        return (vertical,gridGetters,gridRowGap) =>{
          return !this.isWeb && vertical === 'vertical' ? {
            display : 'flex',
            flexDirection: 'column',
          } : {
            display: 'grid',
            gridTemplateColumns: 'repeat(24, 1fr)',
            'grid-column-gap': gridGetters + 'px',
            'grid-row-gap': gridRowGap + 'px',
          }
        }
      }
    }
  }
