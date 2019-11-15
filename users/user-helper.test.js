const { validateUser } = require('./users-helpers');



describe('users helpers', () => {
    describe("validateUser()", () => {
      

        it('should fail if missing password', () => {
            const result = validateUser({username: "somebody"});
            expect(result.isSuccessful).toBe(false);
            expect(result.errors).toHaveLength(1);
            expect(result.errors)
        });

        it("should succeed if called with a valid user", () => {
            const result = validateUser({
                username: "somebody",
                password: "valid password"
            });
            expect(result.isSuccessful).toBe(true);
            expect(result.errors).toHaveLength(0);
        })

        
    });
})