<template>
  <div class="home">
    <div class="container">
      <div class="d-grid gap-3">
        <div class="card">
          <div class="card-header">Topics</div>
          <div class="card-body">
            <div class="row">
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
              <div class="col-4 px-2 py-2 text-center">Column</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Recent Problems</div>
          <table class="table">
            <tbody>
              <tr>
                <td>Maximum Permutation</td>
                <td>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star fa-star-o"></i>
                </td>
                <td><span class="badge text-bg-primary">Solving</span></td>
                <td class="tags">
                  <span class="badge bg-secondary"
                    >constructive algorithms
                  </span>
                  <span class="badge text-bg-secondary">combinatorics </span>
                  <span class="badge text-bg-secondary">data structures </span>
                  <span class="badge text-bg-secondary">trees </span>
                </td>
              </tr>
              <tr>
                <td>Segment Covering</td>
                <td>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star fa-star-o"></i>
                  <i class="fa fa-star fa-star-o"></i>
                </td>
                <td><span class="badge text-bg-dark">To Resolve</span></td>
                <td class="tags">
                  <span class="badge text-bg-secondary"
                    >constructive algorithms
                  </span>
                  <span class="badge text-bg-secondary">combinatorics </span>
                </td>
              </tr>
              <tr>
                <td>Maximum Permutation</td>
                <td>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star fa-star-o"></i>
                </td>
                <td><span class="badge text-bg-success">Done</span></td>
                <td class="tags">
                  <span class="badge text-bg-secondary">trees </span>
                  <span class="badge text-bg-secondary">combinatorics </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.table {
  margin-bottom: 0;
}
</style>
