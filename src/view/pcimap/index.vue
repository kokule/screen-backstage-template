<template>
    <div id="pciMap"></div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {
            initMap() {
                var options = {
                    homeButton: true, //显示home图标，默认false
                    framesPerSecond: true, //显示渲染帧率，默认false
                    leftClick:true,
                    infoBox: true,
                    selection: true,
                    selectionIndicator: true,
                    imageryProvider: PCIMap.createImageryProvider({
                        type: 'arcgis',
                        url: 'http://172.25.21.59:8088/tdtmap',
                    }), //创建地图影像
                    // terrainProvider: PCIMap.createWorldTerrain(),
                    terrainProvider: new PCIMap.CesiumTerrainProvider({
                        // url: 'http://172.28.50.186/dem',
                        // url: 'http://172.25.21.59:8032/mappic/dem',
                        url: 'http://172.25.21.59:8032/%E5%9C%B0%E5%9B%BE%E7%9B%B8%E5%85%B3/mapdem/%E5%B9%BF%E4%B8%9CDEM/aaa.pak/',
                        requestVertexNormals: true,
                        requestWaterMask: true,
                    }), //创建世界地形，默认为null
                    defaultView: {
                        geographic: [113.39936343816667, 23.164269285471008, 232.98075296416883], //相机飞到的经纬度位置
                        attitude: {
                            heading: 0,
                            pitch: -30,
                            roll: 0
                        } //相机姿态角，角度单位
                    },
                }
                let map = PCIMap.createMap('pciMap', options)
                map.leftClickEvent.addEventListener(function (event) {
                    console.log('leftClick:',event)
                })

                let tooltip = new PCIMap.UITooltip().setInnerHTML('<p>今宵有酒今宵醉</p>').showAt({
                    x:400,
                    y:300
                }).addToMap(map)
            }
        },
        mounted() {
            this.initMap()
        }
    }
</script>

<style lang="less" scoped>
    #pciMap {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
</style>
