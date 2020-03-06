import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import { MenuItem } from 'material-ui'
import Axios from 'axios'
import ImageResults from '../component/image-results/ImageResults'


export class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        category: 'music',
        colors: 'orange',
        order: 'popular',
        type: 'all',
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '15485497-573f61100f19ef9e54422edc8',
        images: []
    }

    onTextChange = (e) => {
        const val = e.target.value
        const { searchText, amount, category, colors, order, type, apiUrl, apiKey } = this.state;
        this.setState({
            [e.target.name]: val
        }, () => {
            if (val === '') {
                this.setState({ images: [] })
            } else {
                Axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&category=${category}&colors=${colors}&order=${order}&image_type=${type}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err))
            }
        })
    }

    onAmountChange = (e, index, value) => this.setState({ amount: value })
    onCategoryChange = (e, index, value) => this.setState({ category: value })
    onColorsChange = (e, index, value) => this.setState({ colors: value })
    onOrderChangeChange = (e, index, value) => this.setState({ order: value })
    onTypeChangeChange = (e, index, value) => this.setState({ type: value })
    render() {
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images"
                    fullWidth={true}
                />
                <br />

                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={40} primaryText="40" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>


                <SelectField
                    name="category"
                    floatingLabelText="Category"
                    value={this.state.category}
                    onChange={this.onCategoryChange}
                >
                    <MenuItem value={"music"} primaryText="Music" />
                    <MenuItem value={"backgrounds"} primaryText="Backgrounds" />
                    <MenuItem value={"fashion"} primaryText="Fashion" />
                    <MenuItem value={"nature"} primaryText="Nature" />
                    <MenuItem value={"science"} primaryText="Science" />
                    <MenuItem value={"education"} primaryText="Education" />
                    <MenuItem value={"feelings"} primaryText="Feelings" />
                    <MenuItem value={"health"} primaryText="Health" />
                    <MenuItem value={"people"} primaryText="People" />
                    <MenuItem value={"religion"} primaryText="Religion" />
                    <MenuItem value={"places"} primaryText="Places" />
                    <MenuItem value={"animals"} primaryText="Animals" />
                    <MenuItem value={"industry"} primaryText="Industry" />
                    <MenuItem value={"computer"} primaryText="Computer" />
                    <MenuItem value={"food"} primaryText="Food" />
                    <MenuItem value={"sports"} primaryText="Sports" />
                    <MenuItem value={"transportation"} primaryText="Transportation" />
                    <MenuItem value={"travel"} primaryText="Travel" />

                </SelectField>

                <SelectField
                    name="colors"
                    floatingLabelText="Colors"
                    value={this.state.colors}
                    onChange={this.onColorsChange}
                >
                    <MenuItem value={"orange"} primaryText="Orange" />
                    <MenuItem value={"grayscale"} primaryText="Grayscale" />
                    <MenuItem value={"transparent"} primaryText="Transparent" />
                    <MenuItem value={"red"} primaryText="Red" />
                    <MenuItem value={"yellow"} primaryText="Yellow" />
                    <MenuItem value={"green"} primaryText="Green" />
                    <MenuItem value={"turquoise"} primaryText="Turquoise" />
                    <MenuItem value={"blue"} primaryText="Blue" />
                    <MenuItem value={"lilac"} primaryText="Lilac" />
                    <MenuItem value={"pink"} primaryText="Pink" />
                    <MenuItem value={"white"} primaryText="White" />
                    <MenuItem value={"gray"} primaryText="Gray" />
                    <MenuItem value={"black"} primaryText="Black" />
                    <MenuItem value={"brown"} primaryText="Brown" />
                </SelectField>

                <SelectField
                    name="order"
                    floatingLabelText="Order"
                    value={this.state.order}
                    onChange={this.onOrderChange}
                >
                    <MenuItem value={"popular"} primaryText="Popular" />
                    <MenuItem value={"latest"} primaryText="Latest" />
                </SelectField>

                <SelectField
                    name="type"
                    floatingLabelText="Image Type"
                    value={this.state.type}
                    onChange={this.onTypeChange}
                >
                    <MenuItem value={"all"} primaryText="All" />
                    <MenuItem value={"photo"} primaryText="Photo" />
                    <MenuItem value={"illustration"} primaryText="Illustration" />
                    <MenuItem value={"vector"} primaryText="Vector" />
                </SelectField>

                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    }
}

export default Search
