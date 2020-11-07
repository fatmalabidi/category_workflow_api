export default {
    IsValidStatus: function(status) {
        return status > 0 && status <= 5
    },

    IsValidIds: function(ids) {
        ids.forEach(id => {
            if (id == "") return false
        });
        return true
    }
}