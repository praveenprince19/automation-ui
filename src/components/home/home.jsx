import React, { Fragment } from 'react';
import ConvertPDF from '../convertpdf/convertpdf'
import reportContent from '../../reports/Custom-report_Sorting.html'
class HomeComponent extends React.PureComponent {
constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     const element = getElementFromHTML(reportContent, 'easy-overview');
    //     console.log('element', element);
    // }
    getElementFromHTML = e => {
        const id = "easy-overview";
        const parser = new DOMParser();
        const parsedHTML = parser.parseFromString(reportContent, 'text/html');
        console.log("value ===>", parsedHTML.getElementById(id));
        return parsedHTML.getElementById(id);
      }
    render() {    
        console.log('contnent', reportContent );
        
        return (
            <Fragment>
                <div>
                    <h2> welcome</h2>
                    <button type='button' onClick={this.getElementFromHTML}> click </button>
                    <ConvertPDF />
                    <div className="col-12 col-md-12" dangerouslySetInnerHTML={{__html: reportContent}}></div>
                </div>
            </Fragment>
        )
    }
}

export default HomeComponent;