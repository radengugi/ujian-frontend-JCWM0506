import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getProductAction, sortProducts } from '../actions'


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.products
        }
    }

    printProduct = () => {
        console.log(this.state.data)
        return this.state.data.map((item, index) => {
            return <div>
                <Card>
                    <CardImg top width="100%" src={item.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.description}</CardSubtitle>
                        <CardText>Rp {item.price.toLocaleString()}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        })
    }

    render() {
        return (
            <div>
                {this.printProduct()}
            </div>
        );
    }
}

const mapToProps = ({ productReducers }) => {
    return {
        products: productReducers.products_list,
        productsList: productReducers.products_sort
    }
}

export default connect(mapToProps)(ProductPage);