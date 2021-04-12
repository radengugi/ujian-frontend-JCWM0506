import React from 'react';
import { connect } from 'react-redux';
import CarouselComp from '../components/carousel'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    printProducts = () => {
        console.log('Error :', this.props.products)
        if (this.props.products.length > 0) {
            return this.props.products.map((item, index) => {
                return <div>
                    <Card>
                        <CardImg top width="100%" src={item.img[0]} alt="Card image cap" />
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
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <CarouselComp />
                    <div>
                        {this.printProducts()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapToProps = ({ productReducers }) => {
    return {
        products: productReducers.products_list
    }
}

export default connect(mapToProps)(LandingPage);