import {field_filter} from '../../functions.js'
import filter_data from '../../functions.js'

export default {
    name: 'docs',
    props: ['docs', 'keyword'],
    template: "#grid",
    methods: {
        get_url(){
            return this.$store.getters['principal/base_url']
        },
        check_metadata(metadata, key) {
            if (!field_filter(key))
                return false

            if (typeof metadata == "object")
                if (metadata == null || metadata.length < 1) {
                    return false
                }

            if (typeof metadata === "string")
                if (metadata == "") {
                    return false
                }


            return true
        },
        isObject(o) {
            //console.log("keyword: " + this.keyword);
            return typeof o == "object"
        }
    },
    watch:{
        docs(){            
            return this.docs
        }
    },
    updated(){
        var splide = new Splide( '#image-carousel', {
            perPage : 3,
            type    : 'loop',
            autoplay: false,
          } );
          
        splide.mount();
      },
}