import Notepad from './../components/views/Notepad.jsx'
import { connect } from 'react-redux'
import { loadFile, changeText } from './../actions.jsx'

const mapStateToProps = (state) => {
  return {
    fileContent: state.fileContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFile: (fileContent) => {
      dispatch(loadFile(fileContent))
    },
    onChangeText: (text) => {
      dispatch(changeText(text))
    }
  }
}

const LoadedNotepad = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notepad)

export default LoadedNotepad