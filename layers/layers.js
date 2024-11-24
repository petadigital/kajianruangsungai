var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DASdanPolderberdasarkanAliran_3 = new ol.format.GeoJSON();
var features_DASdanPolderberdasarkanAliran_3 = format_DASdanPolderberdasarkanAliran_3.readFeatures(json_DASdanPolderberdasarkanAliran_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASdanPolderberdasarkanAliran_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASdanPolderberdasarkanAliran_3.addFeatures(features_DASdanPolderberdasarkanAliran_3);
var lyr_DASdanPolderberdasarkanAliran_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DASdanPolderberdasarkanAliran_3, 
                style: style_DASdanPolderberdasarkanAliran_3,
                popuplayertitle: "DAS dan Polder berdasarkan Aliran",
                interactive: true,
    title: 'DAS dan Polder berdasarkan Aliran<br />\
    <img src="styles/legend/DASdanPolderberdasarkanAliran_3_0.png" /> Aliran Barat<br />\
    <img src="styles/legend/DASdanPolderberdasarkanAliran_3_1.png" /> Aliran Tengah<br />\
    <img src="styles/legend/DASdanPolderberdasarkanAliran_3_2.png" /> Aliran Timur<br />'
        });
var format_SistemDASdanPolder_4 = new ol.format.GeoJSON();
var features_SistemDASdanPolder_4 = format_SistemDASdanPolder_4.readFeatures(json_SistemDASdanPolder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemDASdanPolder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemDASdanPolder_4.addFeatures(features_SistemDASdanPolder_4);
var lyr_SistemDASdanPolder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemDASdanPolder_4, 
                style: style_SistemDASdanPolder_4,
                popuplayertitle: "Sistem DAS dan Polder",
                interactive: true,
                title: '<img src="styles/legend/SistemDASdanPolder_4.png" /> Sistem DAS dan Polder'
            });
var format_SungaiBerdasarkanKewenangan_5 = new ol.format.GeoJSON();
var features_SungaiBerdasarkanKewenangan_5 = format_SungaiBerdasarkanKewenangan_5.readFeatures(json_SungaiBerdasarkanKewenangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiBerdasarkanKewenangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiBerdasarkanKewenangan_5.addFeatures(features_SungaiBerdasarkanKewenangan_5);
var lyr_SungaiBerdasarkanKewenangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiBerdasarkanKewenangan_5, 
                style: style_SungaiBerdasarkanKewenangan_5,
                popuplayertitle: "Sungai Berdasarkan Kewenangan",
                interactive: true,
    title: 'Sungai Berdasarkan Kewenangan<br />\
    <img src="styles/legend/SungaiBerdasarkanKewenangan_5_0.png" /> Pemerintah Pusat<br />\
    <img src="styles/legend/SungaiBerdasarkanKewenangan_5_1.png" /> Pemprov DKI<br />'
        });
var format_PotensiLuapanmeter_6 = new ol.format.GeoJSON();
var features_PotensiLuapanmeter_6 = format_PotensiLuapanmeter_6.readFeatures(json_PotensiLuapanmeter_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiLuapanmeter_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiLuapanmeter_6.addFeatures(features_PotensiLuapanmeter_6);
var lyr_PotensiLuapanmeter_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiLuapanmeter_6, 
                style: style_PotensiLuapanmeter_6,
                popuplayertitle: "Potensi Luapan (meter)",
                interactive: true,
    title: 'Potensi Luapan (meter)<br />\
    <img src="styles/legend/PotensiLuapanmeter_6_0.png" /> Meluap<br />\
    <img src="styles/legend/PotensiLuapanmeter_6_1.png" /> Tidak Meluap<br />'
        });
var format_Debitaliranperiodeulang25tahun_7 = new ol.format.GeoJSON();
var features_Debitaliranperiodeulang25tahun_7 = format_Debitaliranperiodeulang25tahun_7.readFeatures(json_Debitaliranperiodeulang25tahun_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Debitaliranperiodeulang25tahun_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Debitaliranperiodeulang25tahun_7.addFeatures(features_Debitaliranperiodeulang25tahun_7);
var lyr_Debitaliranperiodeulang25tahun_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Debitaliranperiodeulang25tahun_7, 
                style: style_Debitaliranperiodeulang25tahun_7,
                popuplayertitle: "Debit aliran periode ulang 25 tahun",
                interactive: true,
    title: 'Debit aliran periode ulang 25 tahun<br />\
    <img src="styles/legend/Debitaliranperiodeulang25tahun_7_0.png" /> 0 - 50<br />\
    <img src="styles/legend/Debitaliranperiodeulang25tahun_7_1.png" /> 50 - 100<br />\
    <img src="styles/legend/Debitaliranperiodeulang25tahun_7_2.png" /> 100 - 500<br />\
    <img src="styles/legend/Debitaliranperiodeulang25tahun_7_3.png" /> 500 - 1212<br />'
        });
var format_HasilSurvey_8 = new ol.format.GeoJSON();
var features_HasilSurvey_8 = format_HasilSurvey_8.readFeatures(json_HasilSurvey_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilSurvey_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilSurvey_8.addFeatures(features_HasilSurvey_8);
var lyr_HasilSurvey_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilSurvey_8, 
                style: style_HasilSurvey_8,
                popuplayertitle: "Hasil Survey",
                interactive: true,
                title: '<img src="styles/legend/HasilSurvey_8.png" /> Hasil Survey'
            });
var group_Aliran = new ol.layer.Group({
                                layers: [lyr_SungaiBerdasarkanKewenangan_5,lyr_PotensiLuapanmeter_6,lyr_Debitaliranperiodeulang25tahun_7,],
                                fold: "open",
                                title: "Aliran"});
var group_DAS = new ol.layer.Group({
                                layers: [lyr_DASdanPolderberdasarkanAliran_3,lyr_SistemDASdanPolder_4,],
                                fold: "open",
                                title: "DAS"});
								
								

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_DASdanPolderberdasarkanAliran_3.setVisible(false);lyr_SistemDASdanPolder_4.setVisible(false);lyr_SungaiBerdasarkanKewenangan_5.setVisible(true);lyr_PotensiLuapanmeter_6.setVisible(false);lyr_Debitaliranperiodeulang25tahun_7.setVisible(false);lyr_HasilSurvey_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,group_DAS,group_Aliran,lyr_HasilSurvey_8];
lyr_DASdanPolderberdasarkanAliran_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'DAS': 'DAS', 'aliran': 'aliran', 'luas': 'luas', 'keterangan': 'keterangan', 'nomor': 'nomor', 'status': 'status', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_SistemDASdanPolder_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'DAS': 'DAS', 'aliran': 'aliran', 'luas': 'luas', 'keterangan': 'keterangan', 'nomor': 'nomor', 'status': 'status', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_SungaiBerdasarkanKewenangan_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SUNGAI': 'Nama Sungai', 'Kewenangan': 'Kewenangan', 'id_segmen': 'ID', 'Reach': 'Reach', 'TANGGUL': 'TANGGUL', 'OBJECTID': 'OBJECTID', 'Sistem_Tat': 'Aliran', 'KETERANGAN': 'Potensi Meluap', 'Lebar_Atas': 'Lebar Atas (meter)', 'Lebar_Bawa': 'Lebar bawah (meter)', 'Kedalaman': 'Kedalaman (meter)', 'Tinggi_muk': 'Tinggi muka air (meter)', 'Luapan__m_': 'Luapan (meter)', 'Q25': 'Debit', 'Shape_Leng': 'Shape_Leng', });
lyr_PotensiLuapanmeter_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SUNGAI': 'Nama Sungai', 'Kewenangan': 'Kewenangan', 'id_segmen': 'ID', 'Reach': 'Reach', 'TANGGUL': 'TANGGUL', 'OBJECTID': 'OBJECTID', 'Sistem_Tat': 'Aliran', 'KETERANGAN': 'Potensi Meluap', 'Lebar_Atas': 'Lebar Atas (meter)', 'Lebar_Bawa': 'Lebar bawah (meter)', 'Kedalaman': 'Kedalaman (meter)', 'Tinggi_muk': 'Tinggi muka air (meter)', 'Luapan__m_': 'Luapan (meter)', 'Q25': 'Debit', 'Shape_Leng': 'Shape_Leng', });
lyr_Debitaliranperiodeulang25tahun_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SUNGAI': 'Nama Sungai', 'Kewenangan': 'Kewenangan', 'id_segmen': 'ID', 'Reach': 'Reach', 'TANGGUL': 'TANGGUL', 'OBJECTID': 'OBJECTID', 'Sistem_Tat': 'Aliran', 'KETERANGAN': 'Potensi Meluap', 'Lebar_Atas': 'Lebar Atas (meter)', 'Lebar_Bawa': 'Lebar bawah (meter)', 'Kedalaman': 'Kedalaman (meter)', 'Tinggi_muk': 'Tinggi muka air (meter)', 'Luapan__m_': 'Luapan (meter)', 'Q25': 'Debit', 'Shape_Leng': 'Shape_Leng', });
lyr_HasilSurvey_8.set('fieldAliases', {'No_': 'No_', 'Surveyor': 'Surveyor', 'x': 'x', 'y': 'y', 'Nama_Sunga': 'Nama_Sunga', 'Lebar_Sung': 'Lebar_Sung', 'Kedalaman_': 'Kedalaman_', 'Jarak_ke_B': 'Jarak_ke_B', });
lyr_DASdanPolderberdasarkanAliran_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'DAS': 'TextEdit', 'aliran': 'TextEdit', 'luas': 'TextEdit', 'keterangan': 'TextEdit', 'nomor': 'TextEdit', 'status': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SistemDASdanPolder_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'DAS': 'TextEdit', 'aliran': 'TextEdit', 'luas': 'TextEdit', 'keterangan': 'TextEdit', 'nomor': 'TextEdit', 'status': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SungaiBerdasarkanKewenangan_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SUNGAI': 'TextEdit', 'Kewenangan': 'TextEdit', 'id_segmen': 'TextEdit', 'Reach': 'TextEdit', 'TANGGUL': 'TextEdit', 'OBJECTID': 'TextEdit', 'Sistem_Tat': 'TextEdit', 'KETERANGAN': 'TextEdit', 'Lebar_Atas': 'TextEdit', 'Lebar_Bawa': 'TextEdit', 'Kedalaman': 'TextEdit', 'Tinggi_muk': 'TextEdit', 'Luapan__m_': 'TextEdit', 'Q25': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PotensiLuapanmeter_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SUNGAI': 'TextEdit', 'Kewenangan': 'TextEdit', 'id_segmen': 'TextEdit', 'Reach': 'TextEdit', 'TANGGUL': 'TextEdit', 'OBJECTID': 'TextEdit', 'Sistem_Tat': 'TextEdit', 'KETERANGAN': 'TextEdit', 'Lebar_Atas': 'TextEdit', 'Lebar_Bawa': 'TextEdit', 'Kedalaman': 'TextEdit', 'Tinggi_muk': 'TextEdit', 'Luapan__m_': 'TextEdit', 'Q25': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Debitaliranperiodeulang25tahun_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SUNGAI': 'TextEdit', 'Kewenangan': 'TextEdit', 'id_segmen': 'TextEdit', 'Reach': 'TextEdit', 'TANGGUL': 'TextEdit', 'OBJECTID': 'TextEdit', 'Sistem_Tat': 'TextEdit', 'KETERANGAN': 'TextEdit', 'Lebar_Atas': 'TextEdit', 'Lebar_Bawa': 'TextEdit', 'Kedalaman': 'TextEdit', 'Tinggi_muk': 'TextEdit', 'Luapan__m_': 'TextEdit', 'Q25': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_HasilSurvey_8.set('fieldImages', {'No_': 'TextEdit', 'Surveyor': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Nama_Sunga': 'TextEdit', 'Lebar_Sung': 'TextEdit', 'Kedalaman_': 'TextEdit', 'Jarak_ke_B': 'TextEdit', });
lyr_DASdanPolderberdasarkanAliran_3.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'DAS': 'inline label - always visible', 'aliran': 'inline label - always visible', 'luas': 'inline label - always visible', 'keterangan': 'inline label - always visible', 'nomor': 'inline label - always visible', 'status': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_SistemDASdanPolder_4.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'DAS': 'inline label - always visible', 'aliran': 'inline label - always visible', 'luas': 'inline label - always visible', 'keterangan': 'inline label - always visible', 'nomor': 'inline label - always visible', 'status': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_SungaiBerdasarkanKewenangan_5.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'SUNGAI': 'inline label - always visible', 'Kewenangan': 'inline label - always visible', 'id_segmen': 'inline label - always visible', 'Reach': 'inline label - always visible', 'TANGGUL': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'Sistem_Tat': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'Lebar_Atas': 'inline label - always visible', 'Lebar_Bawa': 'inline label - always visible', 'Kedalaman': 'inline label - always visible', 'Tinggi_muk': 'inline label - always visible', 'Luapan__m_': 'inline label - always visible', 'Q25': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_PotensiLuapanmeter_6.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'SUNGAI': 'inline label - always visible', 'Kewenangan': 'inline label - always visible', 'id_segmen': 'inline label - always visible', 'Reach': 'inline label - always visible', 'TANGGUL': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'Sistem_Tat': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'Lebar_Atas': 'inline label - always visible', 'Lebar_Bawa': 'inline label - always visible', 'Kedalaman': 'inline label - always visible', 'Tinggi_muk': 'inline label - always visible', 'Luapan__m_': 'inline label - always visible', 'Q25': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_Debitaliranperiodeulang25tahun_7.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'SUNGAI': 'inline label - always visible', 'Kewenangan': 'inline label - always visible', 'id_segmen': 'inline label - visible with data', 'Reach': 'inline label - always visible', 'TANGGUL': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'Sistem_Tat': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'Lebar_Atas': 'inline label - always visible', 'Lebar_Bawa': 'inline label - always visible', 'Kedalaman': 'inline label - always visible', 'Tinggi_muk': 'inline label - always visible', 'Luapan__m_': 'inline label - always visible', 'Q25': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_HasilSurvey_8.set('fieldLabels', {'No_': 'inline label - always visible', 'Surveyor': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'Nama_Sunga': 'inline label - always visible', 'Lebar_Sung': 'inline label - always visible', 'Kedalaman_': 'inline label - always visible', 'Jarak_ke_B': 'inline label - always visible', });
lyr_HasilSurvey_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});