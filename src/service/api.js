export default (_this, params) => {
    params = params == undefined ? '':params;
    return {
        getLatestNews(){
            return _this.$http.get('api/4/news/latest',{params:params})
        },
        getThemeList(){
            return _this.$http.get('api/4/themes',{params:params})
        },
        getThemeNews(){
            return _this.$http.get('api/4/theme/:id',{params:params})
        }
    }
}