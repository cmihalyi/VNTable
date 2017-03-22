import React, {Component} from 'react'
import {Link} from 'react-router'
import moment from 'moment-timezone'
import * as Utils from '../Utilities/Utils'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import CircularProgress from 'material-ui/CircularProgress'
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'

export default class VNTable extends Component{

  constructor(props){
    super(props)
    this.state = {
      body: props.body
    }

    this.moreIconStyles = {
      position: "absolute",
      width: "12px",
      height: "12px",
      bottom: "13px"
    }

    this.iconColor = "#AFB2B6"

    this.sortBy = this.sortBy.bind(this)
    this.keyHunter = this.keyHunter.bind(this)
    this.splitKeys = this.splitKeys.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(this.state.body !== nextProps.body){
      this.setState({
        body: nextProps.body
      })
    }
  }

  sortBy(column){
    var tmp = this.state.body.slice(0);

    //figure out sorting algorithm and order.
    if(this.state.sortBy === column){
      tmp.reverse()
    }else{
      switch(typeof tmp[0][column]){
        case "number":
          tmp.sort((a,b) => {return a[column] - b[column]})
          break
        case "object":
        case "string":
          tmp.sort((a,b) => {
            //handles the case for the infinity (null) values in date field
            if(a[column] && b[column]){
              var strA = a[column].toUpperCase(); // ignore upper and lowercase
              var strB = b[column].toUpperCase(); // ignore upper and lowercase
              if (strA < strB) {
                return -1;
              }
              if (strA > strB) {
                return 1;
              }
              // names must be equal
              return 0;
            }
          })
          break
        default:
        return null
      }
    }

    //update state with new sorted order
    this.setState({
      body: tmp,
      sortBy: column,
    })
  }

  bodyContents(obj){
    const props = this.props
    return (obj.map((row, index) => {
      return (<TableRow key={index} className={this.initialRowSelected(row)}>
        {this.bodyCellContents(row)}
      </TableRow>)
    }))
  }

  headerContents(obj){
    const props = this.props
    return(
      <TableRow>
        {obj.map((column, index) => {
          return (
            <TableHeaderColumn className={(column.className) ? `${column.className}` : `${column.label}`} key={index}>
              {(column.sortDisable) ? <div>{column.label}</div> : <div className="sortable" onClick={() => this.sortBy((column.key) ? `${column.key}` : `${column.label}`)}><span>{column.label}</span><ExpandMoreIcon style={this.moreIconStyles} color={this.iconColor}/></div>}
            </TableHeaderColumn>
          )
        })}
      </TableRow>
    )
  }

  bodyCellContents(row){
    const props = this.props

    return props.head.map((col, index) => {
      let cell;
      let attributeValue;
      let headKeys = this.splitKeys(col.key)

      if(headKeys.length > 1){
        attributeValue = this.keyHunter(row[headKeys[0]], headKeys)
        if (!attributeValue){
          console.log('your head key is incorrect');
          return <div>data error</div>
        }
      }else{
        attributeValue = row[col.key]
      }

      //if cell is a string
      if(typeof attributeValue === "string"){
        //cell is a date string
        if(col.dateFormat){
          if(col.dateFormat.date && col.dateFormat.time){
            cell = <div><div className="date">{moment(attributeValue).format(col.dateFormat.date)}</div><div className="time sm-txt">{moment.tz(attributeValue, moment.tz.guess()).format(col.dateFormat.time)}</div></div>
          }else{
            cell = moment(attributeValue).format(col.dateFormat.date)
          }
        }
        //cell is an image src string
        else if(attributeValue.endsWith(".jpg") || attributeValue.endsWith(".png")){
          cell = <img className="img-fluid" src={attributeValue}/>
        }
        //cell is just a regular string
        else{
          if(index === 0 && row.published_version === null){
            cell = <div><div className="sm-txt highlight">Unpublished</div><div>{attributeValue}</div></div>
          }else if(row.mode === "default" && row.config_type === "default"){
            cell = <div><div className="sm-txt highlight">Default</div><div>{attributeValue}</div></div>
          }
          else{
            cell = attributeValue
          }
        }
      //if cell is a number
      }else if(typeof attributeValue === "number"){
          cell = attributeValue
      //cell is an object
      }else if(typeof attributeValue === "object"){
        //empty or null start or end time field
        if (col.dateFormat){
          cell = '∞'
        }

      //cell is undefined - most likely use case is when no header is needed but a column will exsist for data
      }else if(typeof attributeValue === "undefined"){
        var tmp = col.url.replace(/\[url\]/, row.id);

        cell = <span onClick={() => {
            if (col.action) {
              props.dispatch(col.action.func(col.action.param))
            }
            this.context.router.push(tmp)
          }} className="btn btn-basic btn-blue">{col.cellContent}</span>

      }else{
        cell = typeof attributeValue
      }

      return <TableRowColumn className={col.className} key={index}>{cell}</TableRowColumn>
    });
  }

  splitKeys(keyObj){
    return  keyObj.split(".")
  }

  keyHunter(initObj, keyObj){
    let tmp = initObj

    if(initObj){
      for(let i = 1; i < keyObj.length; i++){
        tmp = tmp[keyObj[i]]
      }
      return tmp
    }else{
      return null
    }
  }


  initialRowSelected(row){
    const props = this.props

    // if(!Utils.isObjectEmpty(props.configuration)){
      if(row.id === props.initialRowSelected){
        return "selected";
      }
    // }
  }

  render() {
    const props = this.props
    const columns = this.columns

    if(!Utils.isObjectEmpty(this.state.body)){
      return(
        <Table className={props.className || ""} onRowSelection={props.onRowClick}>
          <TableHeader className="table-header" displaySelectAll={false} adjustForCheckbox={false} children={this.headerContents(props.head)} />
          <TableBody className="table-body" displayRowCheckbox={false} children={this.bodyContents(this.state.body)} />
        </Table>
      )
    }else{
      return(
        <CircularProgress size={120} style={{top: "100px"}}/>
      )
    }
  }
}

VNTable.contextTypes = {
  router: React.PropTypes.object.isRequired
};
