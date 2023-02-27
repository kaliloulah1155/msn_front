<template>
    <div class="container-fluid">
        <div class="row">
         <div class="col-lg-12 offset-lg-2">
            <div class="table-responsive">
                <DataTable 
                   :data="products"
                   :columns="columns"
                     class="table table-striped table-bordered display"
                     width="100%"
                    :options="{
                        responsive:true,
                        autoWidth:false,
                        dom:'Bfrtip',
                        language:{
                            search:'Recherche',
                            zeroRecords:'Données non disponible',
                            info:'Affichage de _START_ a _END_ sur _TOTAL_ \u00e9l\u00e9ments',
                            infoEmpty:'Affichage de _START_ à _END_ sur _TOTAL_ \u00e9l\u00e9ments',
                            infoFiltered:'(filtres de _MAX_ \u00e9l\u00e9ments au total)',
                            paginate:{first:'Premier',previous:'Pr\u00e9c\u00e9dent',next:'Suivant',last:'Dernier'}
                        },
                        buttons:boutons

                    }"
                   >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>BRAND</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
         </div>
    </div>
    </div>
   
</template>

<script>
 
import axios from 'axios'
import DataTable from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfmake.vfs=pdfFonts.pdfMake.vfs
import 'datatables.net-responsive-bs5'
import 'datatables.net-bs5';
import JsZip from 'jszip'
window.JSZip=JsZip;
DataTable.use(DataTableLib)
DataTable.use(pdfmake)
DataTable.use(ButtonsHtml5)

export default{
     components:{DataTable},
     data(){
        return{
            products:null,
            columns:[
                {data:null,render:function(data,type,row,meta){return `${meta.row+1}`}},
                {data:'category.name'},
                {data:'title'},
                {data:null,render:(data,type,row,meta)=>{ return (new Intl.NumberFormat(undefined, { style: 'currency', currency: 'XOF' }).format(data.price))}}
            ],
            boutons:[
                {
                    title:'Rapport des produits',
                    extend:'excelHtml5',
                    text:'<i>Excel</i>',
                    className:'btn btn-success'
                },
                {
                    title:'Rapport des produits',
                    extend:'pdfHtml5',
                    text:'<i>PDF</i>',
                    className:'btn btn-danger'
                },
                {
                    title:'Rapport des produits',
                    extend:'print',
                    text:'<i>Imprimer</i>',
                    className:'btn btn-warning'
                },
                {
                    title:'Rapport des produits',
                    extend:'copy',
                    text:'<i>Copier</i>',
                    className:'btn btn-dark'
                }
            ]
        }
     },
     mounted(){
        this.getProducts()
     },
     methods:{
        getProducts(){
            axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response=>{
                this.products=response.data
            })
        }
     }
}

</script>

<style lang="scss" scoped>

    @import "bootstrap/dist/css/bootstrap.min.css";
    @import "datatables.net-bs5";
</style>