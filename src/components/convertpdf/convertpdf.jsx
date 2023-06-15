import React, { Fragment } from 'react';
import { jsPDF } from 'jspdf';
import reportContent from '../../reports/Custom-report_Sorting.html'
class ConvertPDF extends React.PureComponent {
constructor(props) {
        super(props);
    }
    convertToPDF = e => {
        const doc = new jsPDF();
        doc.html(reportContent, {
          callback: function () {
            doc.save('converted.pdf');
          }
        }); 
      }
   
    render() {    
        console.log('contnent', reportContent );
        
        return (
            <Fragment>
                <div>
                    <button onClick={this.convertToPDF}>Convert to PDF</button>
                </div>
            </Fragment>
        )
    }
}

export default ConvertPDF;