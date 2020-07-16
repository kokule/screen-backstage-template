<template>
    <div id="main-map">
        <div id="cesium-map"></div>
        <div id="test" class="test">{{enterpriseName}}</div>
    </div>
</template>

<script>
    var viewer
    import icon from '../../assets/image/large-screen/map-kuang.png'
    /* eslint-disable no-undef,no-unused-vars */
    export default {
        name: "index",
        data() {
            return {
                viewer: '',
                entity: '',
                infoItem: '',
                enterpriseName: '四号罐区甲苯储罐C',
                info: [
                    {
                        name: '液发的发的位',
                        lng: 118.456209,
                        lat: 37.978646
                    },
                    {
                        name: '温辅导费度',
                        lng: 118.470368,
                        lat: 37.982684
                    },
                    {
                        name: '浓辅导费度',
                        lng: 118.471368,
                        lat: 37.982684
                    }
                ],
                device: {
                    enterpriseName: '彩客东奥',
                    deviceList: [
                        {
                            name: '4#罐区南罐组',
                            longitude: 118.46932335134896,
                            latitude: 37.980145218140194,
                        },
                        {
                            name: '4#罐区北罐组',
                            longitude: 118.4693021451224,
                            latitude: 37.9805745684123
                        },
                        {
                            name: '2号罐区',
                            longitude: 118.47046916610256,
                            latitude: 37.981028559516076
                        },
                        {
                            name: '3号罐区',
                            longitude: 118.47051574110546,
                            latitude: 37.98167395504279
                        },
                        {
                            name: 'NMP生产装置',
                            longitude: 118.47081295940653,
                            latitude: 37.982723273511965,
                        },
                        {
                            name: '邻甲苯胺装置',
                            longitude: 118.47144015223529,
                            latitude: 37.98261035195519,
                        },
                        {
                            name: '甲苯硝化装置',
                            longitude: 118.47203740417491,
                            latitude: 37.98280578309362,
                        },
                        {
                            name: '甲苯硝化装置二期',
                            longitude: 118.47205272122973,
                            latitude: 37.98148684156862,
                        },
                        {
                            name: '废水池',
                            longitude: 118.47323945759955,
                            latitude: 37.98169864153485,
                        },
                        {
                            name: '测试3333333',
                            longitude: 118.45323945759955,
                            latitude: 37.98169864153485,
                        },
                        {
                            name: '测试ddddd3333',
                            longitude: 118.45323945759955,
                            latitude: 37.97169864153485,
                        }
                    ]
                }
            }
        },
        methods: {
            /**
             * 三维地图
             */
            initCesiumMap() {
                viewer = new Cesium.Viewer('cesium-map', {
                    //需要进行可视化的数据源的集合
                    animation: false, //是否显示动画控件
                    shouldAnimate: true,
                    vrButton: false,
                    skyAtmosphere: false,
                    // selectionIndicator: false, // 点击选中效果
                    homeButton: true, //是否显示Home按钮
                    fullscreenButton: false, //是否显示全屏按钮
                    baseLayerPicker: false, //是否显示图层选择控件
                    geocoder: false, //是否显示地名查找控件
                    timeline: false, //是否显示时间线控件
                    sceneModePicker: false, //是否显示投影方式控件
                    navigationHelpButton: false, //是否显示帮助信息控件
                    infoBox: false, //是否显示点击要素之后显示的信息
                    requestRenderMode: false, //启用请求渲染模式
                    scene3DOnly: true, //每个几何实例将只能以3D渲染以节省GPU内存
                    sceneMode: 3, //初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
                    maximumRenderTimeChange: true,
                    imageryProvider: new Cesium.UrlTemplateImageryProvider({url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"})
                });
                viewer.scene.moon.show = false;
                viewer.scene.fog.enabled = false;
                viewer.scene.sun.show = false;
                viewer.scene.skyBox.show = false;
                viewer.scene.postProcessStages.fxaa.enabled = false;
                viewer.resolutionScale = 1;//默认值为1.0 清晰度
                // this.viewer.scene.requestRenderMode = true;

                // let tileset = new Cesium.Cesium3DTileset({
                //   url: '/3dmap/sanwei/chengguo/Production_13/tileset.json', // 会飘
                //   maximumScreenSpaceError: 16, //默认值16 用于提高细节细化级别的最大屏幕空间错误
                // });
                // viewer.scene.primitives.add(tileset)
                // tileset.readyPromise.then(function(tileset) {
                //   viewer.scene.primitives.add(tileset);
                //   var heightOffset = 50.0; //高度
                //   var boundingSphere = tileset.boundingSphere;
                //   var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
                //   var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
                //   var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
                //   var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
                //   tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
                //   viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -0.2, tileset.boundingSphere.radius * 1.0));
                // });
                // this.$config.mapLayerUrls.forEach(e => {
                //   viewer.scene.primitives.add(
                //     new Cesium.Cesium3DTileset({
                //       url: e,
                //       maximumScreenSpaceError: 64 //默认值16 用于提高细节细化级别的最大屏幕空间错误
                //     })
                //   );
                // })

                viewer.camera.setView({
                    destination: Cesium.Cartesian3.fromDegrees(113.259655627, 23.4290703196891, 800.0), // 设置位置
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 方向
                        pitch: Cesium.Math.toRadians(-45.0),// 倾斜角度
                        roll: 0
                    }
                })
                // this.addTag()
                this.loadKmlFile()
            },
            loadKmlFile() {
                const files = require.context('../cesium', true)
                console.log(files)
                viewer.dataSources.add(Cesium.KmlDataSource.load('./data/国道.kml'),{
                    camera : viewer.scene.camera,
                    canvas:viewer.scene.canvas
                })
                  viewer.dataSources.add(Cesium.KmlDataSource.load('./data/高速公路.kml'),{
                      camera : viewer.scene.camera,
                      canvas:viewer.scene.canvas
                  })
                viewer.dataSources.add(Cesium.KmlDataSource.load('./data/省道.kml'),{
                    camera : viewer.scene.camera,
                    canvas:viewer.scene.canvas
                })
                viewer.dataSources.add(Cesium.KmlDataSource.load('./data/花都区三类视频监控点位.kml'),{
                    camera : viewer.scene.camera,
                    canvas:viewer.scene.canvas
                })
            },

            addTag() {
                var pinBuilder = new Cesium.PinBuilder();
                this.device.deviceList.forEach((e, index) => {
                    let entity = viewer.entities.add({
                        id: e.name,
                        name: e.name,
                        position: Cesium.Cartesian3.fromDegrees(e.longitude, e.latitude),
                        // billboard: {
                        //   image: pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
                        // },
                        billboard: {
                            image: './image/map-kuang.png',
                            scale: 0.9,
                            scaleByDistance: new Cesium.NearFarScalar(500, 1, 5000, 0),
                        },
                        label: {
                            text: e.name,
                            font: '20px sans-serif',
                            color: Cesium.Color.WHITE,
                            style: Cesium.LabelStyle.FILL,
                            fillColor: Cesium.Color.AQUA,
                            showBackground: false,
                            scaleByDistance: new Cesium.NearFarScalar(500, 1, 5000, 0), //含义就是在摄像头和Billboard之间的距离在2000-8000之间的时候，Billboard的Scale比例按照1->0之间的插值来缩放。当摄像头和Billboard之间距离小于2000的时候，就按照2000时候的值1处理（这里如果不是1，而是0.5，那小于2000时候的比例就是0.5了）。而当大于8000的时候，就会按照0（其实就是8000对应的比例值）缩放。
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0, 0) // 调整偏移位置
                        }
                    });
                    // this.setTag(e, index)
                })
            },
            setTag(data, index) {
                var div = document.getElementById('main-map');
                var divChild = document.createElement('div');
                divChild.id = 'test' + index
                divChild.className = 'test'
                div.appendChild(divChild);
                divChild.addEventListener('click', () => { // 添加事件监听
                    this.infoItem = data
                    console.log(this.infoItem.name)
                })
                var htmlOverlay = document.getElementById('test' + index);
                htmlOverlay.innerHTML = data.name
                var scratch = new Cesium.Cartesian2();
                viewer.scene.preRender.addEventListener(function () {
                    var position = Cesium.Cartesian3.fromDegrees(data.lng, data.lat);
                    var canvasPosition = viewer.scene.cartesianToCanvasCoordinates(position, scratch);
                    if (Cesium.defined(canvasPosition)) {
                        htmlOverlay.style.top = canvasPosition.y + 'px';
                        htmlOverlay.style.left = canvasPosition.x + 'px';
                    }
                });

                // var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
                // handler.setInputAction((movement) => {
                //   var pick = viewer.scene.pick(movement.position);
                //   console.log(pick)
                //   if (pick !== undefined && pick.id !== undefined) {
                //     console.log(pick.id._name)
                //     // //获取一个实体
                //     // var entity = viewer.entities.getById('uniqueId')
                //     // //获取一个实体，如果不存在则创建之
                //     // var entity = viewer.entities.getOrCreateEntity('uniqueId');
                //   }
                // }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
            }
        },
        mounted() {
            // console.log(this.$store.state.username)
            this.initCesiumMap()
        }
    }
</script>

<style lang="less">
    @import url(../../../public/Cesium/Widgets/widgets.css);

    html, body, #cesiumContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .test {
        position: absolute;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        color: white;
        padding: 0 15px;
        cursor: pointer;
        background-image: url("../../assets/image/large-screen/map-kuang.png");
        background-size: 100% 100%;
        &::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 30px;
            bottom: 0;
            background: #06A7D4;
            left: 50%;
            transform: translate(-50%, 100%);
        }
    }
</style>
