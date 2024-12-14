/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        // Método que compara si los dos valores son estrictamente iguales
        toBe: function(compareVal) {
            if (val === compareVal) {
                return { value: true };
            } else {
                throw new Error("Not Equal");
            }
        },
        // Método que compara si los dos valores son estrictamente diferentes
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return { value: true };
            } else {
                throw new Error("Equal");
            }
        }
    };
};



 expect(5).toBe(5); // { value: true }
 expect(5).notToBe(6); // Lanza error "Equal"
 
