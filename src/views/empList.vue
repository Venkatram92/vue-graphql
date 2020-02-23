<template>
    <div>
        <h1>Employees Names</h1>
        <employeeData/>
    </div>
</template>

<script>
import employeeData from "@/components/empList-component.vue";
export default{
    components: {
        employeeData
    }
};
</script>