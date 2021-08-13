import React, { Component } from 'react'
import ResultService from '../services/ResultService'

class ListResultComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                results: [],
                keyword:'',
                currentUser: false,
        }
    }


    componentDidMount(){
        ResultService.getResults().then((res) => {
            this.setState({ results: res.data});
        });
        
        const user = ResultService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
            })
        }


    }


    render() {
        return (
            <div>
                
                 <h2 className="text-center">Results</h2>
                 
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> No. </th>
                                    <th> Academic Year</th>
                                    <th> Student Name </th>
                                    <th> Student No</th>
                                    <th> Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.currentUser && (
                                    this.state.results.map(
                                        result => 
                                        <tr key = {result.id}>
                                                <td> {result.id} </td>   
                                                <td> {result.academic_year} </td>   
                                                 <td> {result.stdnt_name}</td>
                                                 <td> {result.stdnt_no}</td>
                                                <td> {result.stdnt_percentage}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListResultComponent