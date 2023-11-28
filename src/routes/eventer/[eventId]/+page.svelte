<script lang="ts">
  import type { PageData } from './$types';

  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Fab from '@smui/fab'
  import { Label } from '@smui/common'

  export let data: PageData;

</script>


<main>
    <DataTable>
      <Head>
        <Row>
          <Cell>Navn</Cell>
          <Cell>Organisasjon</Cell>
          <Cell>Epost</Cell>
          <Cell>Allergier</Cell>
          <Cell>RSVP</Cell>
        </Row>
      </Head>
      <Body>
        {#each data.deltakere as person}
        <Row>
          <Cell>{person.navn}</Cell>
          <Cell>{person.orgId}</Cell>
          <Cell>{person.epost}</Cell>
          <Cell>
            {person.rsvp}
          </Cell>
        </Row> 
        {/each}
      </Body>
    </DataTable>
  </main>