var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Districts0 = new ol.format.GeoJSON();
var features_Districts0 = format_Districts0.readFeatures(json_Districts0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Districts0.addFeatures(features_Districts0);var lyr_Districts0 = new ol.layer.Vector({
                source:jsonSource_Districts0, 
                style: style_Districts0,
                title: '<img src="styles/legend/Districts0.png" /> Districts'
            });var format_WAPPS1 = new ol.format.GeoJSON();
var features_WAPPS1 = format_WAPPS1.readFeatures(json_WAPPS1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAPPS1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WAPPS1.addFeatures(features_WAPPS1);var lyr_WAPPS1 = new ol.layer.Vector({
                source:jsonSource_WAPPS1, 
                style: style_WAPPS1,
                title: '<img src="styles/legend/WAPPS1.png" /> WAPPS'
            });var format_SKB2 = new ol.format.GeoJSON();
var features_SKB2 = format_SKB2.readFeatures(json_SKB2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKB2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SKB2.addFeatures(features_SKB2);var lyr_SKB2 = new ol.layer.Vector({
                source:jsonSource_SKB2, 
                style: style_SKB2,
                title: '<img src="styles/legend/SKB2.png" /> SKB'
            });var format_N2Africa3 = new ol.format.GeoJSON();
var features_N2Africa3 = format_N2Africa3.readFeatures(json_N2Africa3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N2Africa3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_N2Africa3.addFeatures(features_N2Africa3);var lyr_N2Africa3 = new ol.layer.Vector({
                source:jsonSource_N2Africa3, 
                style: style_N2Africa3,
                title: '<img src="styles/legend/N2Africa3.png" /> N2Africa'
            });var format_IMAGINE4 = new ol.format.GeoJSON();
var features_IMAGINE4 = format_IMAGINE4.readFeatures(json_IMAGINE4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMAGINE4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IMAGINE4.addFeatures(features_IMAGINE4);var lyr_IMAGINE4 = new ol.layer.Vector({
                source:jsonSource_IMAGINE4, 
                style: style_IMAGINE4,
                title: '<img src="styles/legend/IMAGINE4.png" /> IMAGINE'
            });var format_GV5 = new ol.format.GeoJSON();
var features_GV5 = format_GV5.readFeatures(json_GV5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GV5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GV5.addFeatures(features_GV5);var lyr_GV5 = new ol.layer.Vector({
                source:jsonSource_GV5, 
                style: style_GV5,
                title: '<img src="styles/legend/GV5.png" /> GV'
            });var format_GPD6 = new ol.format.GeoJSON();
var features_GPD6 = format_GPD6.readFeatures(json_GPD6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPD6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GPD6.addFeatures(features_GPD6);var lyr_GPD6 = new ol.layer.Vector({
                source:jsonSource_GPD6, 
                style: style_GPD6,
                title: '<img src="styles/legend/GPD6.png" /> GPD'
            });var format_F4F7 = new ol.format.GeoJSON();
var features_F4F7 = format_F4F7.readFeatures(json_F4F7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F4F7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_F4F7.addFeatures(features_F4F7);var lyr_F4F7 = new ol.layer.Vector({
                source:jsonSource_F4F7, 
                style: style_F4F7,
                title: '<img src="styles/legend/F4F7.png" /> F4F'
            });var format_ESCCG8 = new ol.format.GeoJSON();
var features_ESCCG8 = format_ESCCG8.readFeatures(json_ESCCG8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESCCG8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ESCCG8.addFeatures(features_ESCCG8);var lyr_ESCCG8 = new ol.layer.Vector({
                source:jsonSource_ESCCG8, 
                style: style_ESCCG8,
                title: '<img src="styles/legend/ESCCG8.png" /> ESCCG'
            });var format_AFITS9 = new ol.format.GeoJSON();
var features_AFITS9 = format_AFITS9.readFeatures(json_AFITS9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFITS9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AFITS9.addFeatures(features_AFITS9);var lyr_AFITS9 = new ol.layer.Vector({
                source:jsonSource_AFITS9, 
                style: style_AFITS9,
                title: '<img src="styles/legend/AFITS9.png" /> AFITS'
            });var format_GWD10 = new ol.format.GeoJSON();
var features_GWD10 = format_GWD10.readFeatures(json_GWD10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GWD10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GWD10.addFeatures(features_GWD10);var lyr_GWD10 = new ol.layer.Vector({
                source:jsonSource_GWD10, 
                style: style_GWD10,
                title: '<img src="styles/legend/GWD10.png" /> GWD'
            });var format_PhD11 = new ol.format.GeoJSON();
var features_PhD11 = format_PhD11.readFeatures(json_PhD11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhD11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PhD11.addFeatures(features_PhD11);var lyr_PhD11 = new ol.layer.Vector({
                source:jsonSource_PhD11, 
                style: style_PhD11,
                title: '<img src="styles/legend/PhD11.png" /> PhD'
            });

lyr_Districts0.setVisible(true);lyr_WAPPS1.setVisible(true);lyr_SKB2.setVisible(true);lyr_N2Africa3.setVisible(true);lyr_IMAGINE4.setVisible(true);lyr_GV5.setVisible(true);lyr_GPD6.setVisible(true);lyr_F4F7.setVisible(true);lyr_ESCCG8.setVisible(true);lyr_AFITS9.setVisible(true);lyr_GWD10.setVisible(true);lyr_PhD11.setVisible(true);
var layersList = [baseLayer,lyr_Districts0,lyr_WAPPS1,lyr_SKB2,lyr_N2Africa3,lyr_IMAGINE4,lyr_GV5,lyr_GPD6,lyr_F4F7,lyr_ESCCG8,lyr_AFITS9,lyr_GWD10,lyr_PhD11];
lyr_Districts0.set('fieldAliases', {'District': 'District', });
lyr_WAPPS1.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_SKB2.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_N2Africa3.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_IMAGINE4.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_GV5.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_GPD6.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_F4F7.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_ESCCG8.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_AFITS9.set('fieldAliases', {'District': 'District', 'Title': 'Title', });
lyr_GWD10.set('fieldAliases', {'Title': 'Title', 'ShortTitle': 'ShortTitle', 'Scale': 'Scale', });
lyr_PhD11.set('fieldAliases', {'District': 'District', 'PhD': 'PhD', });
lyr_Districts0.set('fieldImages', {'District': 'TextEdit', });
lyr_WAPPS1.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_SKB2.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_N2Africa3.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_IMAGINE4.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_GV5.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_GPD6.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_F4F7.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_ESCCG8.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_AFITS9.set('fieldImages', {'District': 'TextEdit', 'Title': 'TextEdit', });
lyr_GWD10.set('fieldImages', {'Title': 'TextEdit', 'ShortTitle': 'TextEdit', 'Scale': 'TextEdit', });
lyr_PhD11.set('fieldImages', {'District': 'TextEdit', 'PhD': 'TextEdit', });
lyr_Districts0.set('fieldLabels', {'District': 'header label', });
lyr_WAPPS1.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_SKB2.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_N2Africa3.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_IMAGINE4.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_GV5.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_GPD6.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_F4F7.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_ESCCG8.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_AFITS9.set('fieldLabels', {'District': 'header label', 'Title': 'header label', });
lyr_GWD10.set('fieldLabels', {'Title': 'header label', 'ShortTitle': 'header label', 'Scale': 'header label', });
lyr_PhD11.set('fieldLabels', {'District': 'header label', 'PhD': 'header label', });
lyr_PhD11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});