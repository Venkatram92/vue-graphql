<template>
    <div id="signupDetails">
        {{getUsers}}
    </div>
</template>
<script>
    import gql from 'graphql-tag';
    const getAllUsersQuery = gql` query alluesrs{
                                getUsers{Company}  
                            }`;
    export default{
        data() {
            return {
                getUsers: Array
            };
        },
        apollo: {
            getUsers: getAllUsersQuery
        }
    };
</script>