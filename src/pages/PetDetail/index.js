import React from 'react'
import PetDetailPaper from '../../Components/PetDetail/DetailPaper';
import { connect } from 'react-redux'

const Index = ({data}) => {

  return (
    <div className="App-Pet-Detail">
        <PetDetailPaper data={data} />
        
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.petDetail
});
export default connect(mapStateToProps, null)(Index);