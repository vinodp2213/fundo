import React from 'react';
import { connect } from "react-redux"
import Select from 'react-select'
import { startAddCampaign } from '../../redux/actions/campaign';
import { startGetCategory } from '../../redux/actions/category';

class newCampaign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            description : '',
            briefStory : '',
            targetAmount : '',
            categoryId : '',
            imageUrl : null,
            accountDetails : {
                accountName : '',
                bankName : '',
                accountNo : '',
                branchName : '',
                ifscCode : ''
            },
            benificiary : {
                beneficiaryType : '',
                name : "",
                address : ''
            }
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetCategory())
    }
    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    handleAccount = (e) => {
        const { accountDetails } = { ...this.state }
        const currentState = accountDetails
        const { name, value } = e.target
        currentState[name] = value
        this.setState({ accountDetails: currentState })
    }

    handleBenificiary = (e) => {
        const { benificiary } = { ...this.state }
        const beneficiaryState = benificiary
        const { name, value } = e.target
        beneficiaryState[name] = value
        this.setState({ benificiary: beneficiaryState })
    }
    handleFile = (e) =>  {
        e.persist()
        console.log(e.target.files)
        this.setState(() => ({
            imageUrl : e.target.files
        }))
    }

    // handleType = (e) => {
    //     console.log(e)
    //     const typeBenificiary = e.value
    //     this.setState(()=> ({ beneficiaryType : typeBenificiary}))
    //     console.log(this.state.beneficiaryType)
    // }
    handleCategory = (e) => {
        console.log(e.id)
        const categoryId = e.id
        this.setState(() => ({ categoryId }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        var formData = this.state
        const data = new FormData()
        for(var i = 0; i<this.state.imageUrl.length; i++) {
        data.append('imageUrl', this.state.imageUrl[i])
        console.log(formData, "in new.js")
        this.props.dispatch(startAddCampaign(formData, this.props))
        }
    }

    render(){
        const options = this.props.category.map(categ => {
            return { value: categ.categoryName, label: categ.categoryName,  id : categ._id };
          })
        const type = [
        { value: 'Individual', label: 'Individual' },
        { value: 'NGO', label: 'NGO' }
        ]
        return (
            <div className="container">
                <h2> Start Campaign here</h2>
                <form onSubmit={this.handleSubmit}>
                    Campaign Title :
                        <input type="text" value ={this.state.title} onChange={this.handleChange} name='title'/>
                    <br/>
                    Description:
                        <input type="text" value ={this.state.description} onChange={this.handleChange} name='description'/>
                    <br/>
                    select category :
                    <Select
                        name="categoryId"
                        onChange={this.handleCategory}
                        isSearchable
                        options={options}
                    />
                    <br/>
                    Brief Story :
                        <input type="text" value ={this.state.briefStory} onChange={this.handleChange} name='briefStory'/>
                    <br/>
                    Add image : 
                    <input type="file" multiple name = "imageUrl" onChange={this.handleFile}/>
                    <br/>
                    Target Amount :
                        <input type="text" value ={this.state.targetAmount} onChange={this.handleChange} name='targetAmount'/>
                    <br/><br/>
                    Beneficiary Details : 
                    <br/> 
                    {/* Type : 
                    <Select 
                        name="beneficiaryType"
                        onChange={this.handleType}
                        isSearchable
                        options={type}
                    /> */}
                    <br/>
                    Beneficiary Name : 
                    <input type="text" name="name" value={this.state.benificiary.name} onChange={this.handleBenificiary}/>
                    <br/>
                    Beneficiary address
                        <textarea name="address" value={this.state.benificiary.address} 
                                    className="materialize-textarea" onChange={this.handleBenificiary} > 
                        </textarea>
                        <label>Address should contain city, state, country and pincode</label>
                    <br/> 
                    <br/>
                    Bank Details :
                        <br/>
                        Account holder Name : 
                        <input type="text" onChange={this.handleAccount} value={this.state.accountDetails.accountName} name="accountName"/>
                        <br/>
                        Bank:
                        <input type="text" onChange={this.handleAccount}  value={this.state.accountDetails.bankName} name="bankName"/>
                        <br/>
                        Account Number : 
                        <input type="number" onChange={this.handleAccount}  value={this.state.accountDetails.accountNo} name="accountNo"/>
                        <br/>
                        Branch : 
                        <input type="text" onChange={this.handleAccount} value={this.state.accountDetails.branchName} name="branchName"/>
                        <br/>
                        IFSC Code : 
                        <input type="text" onChange={this.handleAccount} value={this.state.accountDetails.ifscCode} name="ifscCode"/>
                        <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.category)
    return {
        campaigns : state.campaign,
        category : state.category
    }
}

export default connect(mapStateToProps)(newCampaign)