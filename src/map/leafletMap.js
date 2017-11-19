import React, {
    Component
} from 'react';
import {
    compose,
    withProps
} from "recompose";
import {
    Map,
    Marker,
    Popup,
    TileLayer
} from 'react-leaflet';
import L from 'leaflet';
import KML from 'leaflet-plugins/layer/vector/KML'

const position = [6.9270786, 79.861243];

const DEFAULT_VIEWPORT = {
    center: [6.9270786, 79.861243],
    zoom: 13,
}

class BusMap extends Component {
    state = {
        viewport: DEFAULT_VIEWPORT,
    }

    onClickReset = () => {
        this.setState({
            viewport: DEFAULT_VIEWPORT
        })
    }

    onViewportChanged = viewport => {
        this.setState({
            viewport
        })
    }
    
    
    componentDidMount() {
        var kmlLayer = new L.KML("bus_map.kml", {async: true});
        this.refs.map.leafletElement.addLayer(kmlLayer);     
    }

    render() {
        return (
        
        <Map
            ref='map'
            onClick={this.onClickReset}
            onViewportChanged={this.onViewportChanged}
            viewport={this.state.viewport}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        );
    }
}

export default BusMap;