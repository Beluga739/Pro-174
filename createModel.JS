AFRAME.registerComponent('city',{
    init:async function(){
        var model=await this.getList()
    },
    getList:function(){
        return fetch("/list.json").then(res=>res.json()).then(data=>data)
    },
    createModel: function (model) {
        var barcodeValue = model.barcode_value;
        var modelUrl = model.model_ur1;
        var modelName = model.model_name;

        var scene = document.querySelector("a-scene");

        var marker = document.createElement("a-marker");

        marker.setAttribute("id", `marker-${modelName}`);
        marker.setAttribute("type", "barcode");
        marker.setAttribute("model_name", modelName);
        marker.setAttribute("value", barcodeValue);
        marker.setAttribute("markerhandler", {});
        scene.appendChild(marker);
        if (barcodeValue === 0) {
            var modelEl = document.createElement ("a-entity");
            modelE1.setAttribute("id", '$(modelName)');
            modelE1.setAttribute("geometry", {
                primitive: "box",
                width: model.width,
                height: model. height
            });
            modelEl.setAttribute("position", model.position);
            modelE1.setAttribute("rotation", model.rotation);
            modelEl.setAttribute("material", {
                color: model.color
                
            });
            marker.appendChild(modelE1);
        } else {
            var modelEl = document.createElement ("a-entity");
            modelEl.setAttribute("id", `${modelName}`);
            modelE1.setAttribute("gltf-model", `url(${modelUrl})`);
            modelEl.setAttribute("scale", model.scale);
            modelEl.setAttribute("position", model.position);
            modelE1.setAttribute("rotation", model.rotation);
            marker.appendChild(modelEl);
        } 
    }
})